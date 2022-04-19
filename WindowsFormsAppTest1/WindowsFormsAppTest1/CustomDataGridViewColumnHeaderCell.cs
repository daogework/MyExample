using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
using System.Windows.Forms.VisualStyles;

namespace WindowsFormsAppTest1
{
    class CustomDataGridViewColumnHeaderCell : DataGridViewColumnHeaderCell
    {

        static Dictionary<DataGridView, List<CustomDataGridViewColumnHeaderCell>> clickedDic = new Dictionary<DataGridView, List<CustomDataGridViewColumnHeaderCell>>();

        DataGridView dataGridView;


        protected override void OnDataGridViewChanged()
        {
            base.OnDataGridViewChanged();
            if (DataGridView != null)
            {
                if (dataGridView == null)
                {
                    dataGridView = DataGridView;
                    if(!clickedDic.TryGetValue(dataGridView, out List<CustomDataGridViewColumnHeaderCell> list))
                    {
                        list = new List<CustomDataGridViewColumnHeaderCell>();
                        clickedDic.Add(dataGridView, list);
                    }
                    list.Add(this);

                    // Disable sorting and filtering for columns that can't make
                    // effective use of them. 
                    if (OwningColumn != null)
                    {
                        // Ensure that the column SortMode property value is not Automatic.
                        // This prevents sorting when the user clicks the drop-down button.
                        if (OwningColumn.SortMode == DataGridViewColumnSortMode.Automatic)
                        {
                            OwningColumn.SortMode = DataGridViewColumnSortMode.Programmatic;
                        }
                    }
                }

                Padding dropDownPadding = new Padding(0, 20, 0, 0);
                this.Style.Padding = Padding.Add(this.Style.Padding, dropDownPadding);

            }
            else 
            {
                if (dataGridView != null)
                {
                    if(clickedDic.TryGetValue(dataGridView, out List<CustomDataGridViewColumnHeaderCell> list))
                    {
                        list.Remove(this);
                        if(list.Count==0) clickedDic.Remove(dataGridView);
                    }
                        
                    dataGridView = null;
                }
                //dataGridView.Controls.Remove(radioButton);
            }

            //this.on
            
        }


        private RadioButtonState state = RadioButtonState.UncheckedNormal;

        private bool clicked;
        //bool lastVisible;
        Rectangle radioButtonRectangle;
        protected override void Paint(Graphics graphics, Rectangle clipBounds, Rectangle cellBounds, int rowIndex, DataGridViewElementStates dataGridViewElementState, object value, object formattedValue, string errorText, DataGridViewCellStyle cellStyle, DataGridViewAdvancedBorderStyle advancedBorderStyle, DataGridViewPaintParts paintParts)
        {
            base.Paint(graphics, clipBounds, cellBounds, rowIndex, dataGridViewElementState, value, formattedValue, errorText, cellStyle, advancedBorderStyle, paintParts);
            //RadioButtonRenderer.DrawRadioButton(graphics, new Point(cellBounds.X, cellBounds.Y), RadioButtonState.CheckedNormal);


            radioButtonRectangle = cellBounds;
            radioButtonRectangle.Height /= 2;
            graphics.DrawRectangle(new Pen(Color.Black), radioButtonRectangle);
            //radioButtonRectangle.X -= 5;
            //radioButtonRectangle.Width -= 20;
            RadioButtonRenderer.DrawRadioButton(graphics, new Point(cellBounds.X+5, cellBounds.Y+4), radioButtonRectangle, $"选择[{Value}]开奖", SystemFonts.DefaultFont, clicked, state);
        }

        private void SortByColumn()
        {
            Debug.Assert(this.DataGridView != null && OwningColumn != null, "DataGridView or OwningColumn is null");

            // Determine the sort direction and sort by the owning column. 
            ListSortDirection direction = ListSortDirection.Ascending;
            if (this.DataGridView.SortedColumn == OwningColumn &&
                this.DataGridView.SortOrder == SortOrder.Ascending)
            {
                direction = ListSortDirection.Descending;
            }


            DataGridView.Sort(OwningColumn, direction);
            OwningColumn.HeaderCell.SortGlyphDirection = DataGridView.SortOrder;
        }

        //protected override void OnClick(DataGridViewCellEventArgs e)
        //{
        //    Console.WriteLine("OnClick");
        //    //base.OnClick(e);
        //}

        //protected override void OnMouseClick(DataGridViewCellMouseEventArgs e)
        //{
        //    Console.WriteLine("OnMouseClick");
        //    //base.OnMouseClick(e);
        //}

        //protected override void OnMouseUp(DataGridViewCellMouseEventArgs e)
        //{
        //    base.OnMouseUp(e);
        //}

        //protected override bool MouseDownUnsharesRow(DataGridViewCellMouseEventArgs e)
        //{
        //    Console.WriteLine("MouseDownUnsharesRow");
        //    return base.MouseDownUnsharesRow(e);
        //}



        protected override void OnMouseDown(DataGridViewCellMouseEventArgs e)
        {
            Rectangle cellBounds = this.DataGridView
                .GetCellDisplayRectangle(e.ColumnIndex, -1, false);
            Int32 scrollingOffset = 0;
            if (this.DataGridView.RightToLeft == RightToLeft.No &&
                this.DataGridView.FirstDisplayedScrollingColumnIndex ==
                this.ColumnIndex)
            {
                scrollingOffset =
                    this.DataGridView.FirstDisplayedScrollingColumnHiddenWidth;
            }
            if (radioButtonRectangle.Contains(e.X + cellBounds.Left - scrollingOffset, e.Y + cellBounds.Top))
            {
                if (!clicked)
                {
                    clicked = true;
                    state = RadioButtonState.CheckedPressed;
                    uncheckOthers();
                }
                //else
                //{
                //    clicked = false;
                //    state = RadioButtonState.UncheckedNormal;
                //}
            }
            else
            {
                SortByColumn();
            }
            //base.OnMouseDown(e);
            
        }

        void uncheckOthers()
        {
            foreach (var item in clickedDic[dataGridView])
            {
                if (item == this) continue;
                item.clicked = false;
                item.state = RadioButtonState.UncheckedNormal;
            }
            dataGridView.Refresh();
        }

        private class RowComparer : System.Collections.IComparer
        {
            private static int sortOrderModifier = 1;

            int targetColumn = 0;
            public RowComparer(ListSortDirection sortOrder, int targetColumn)
            {
                if (sortOrder == ListSortDirection.Descending)
                {
                    sortOrderModifier = -1;
                }
                else if (sortOrder == ListSortDirection.Ascending)
                {
                    sortOrderModifier = 1;
                }
                this.targetColumn = targetColumn;
            }

            public int Compare(object x, object y)
            {
                DataGridViewRow DataGridViewRow1 = (DataGridViewRow)x;
                DataGridViewRow DataGridViewRow2 = (DataGridViewRow)y;

                var v1 = DataGridViewRow1.Cells[targetColumn].Value;
                var v2 = DataGridViewRow2.Cells[targetColumn].Value;
                if (v1 == null)
                {
                    if (v2 != null)
                        return -1;
                    else return 0;
                }
                if (v2 == null)
                {
                    if (v1 != null)
                        return 1;
                    else return 0;
                }
               
                int CompareResult = ((IComparable)v1).CompareTo(v2);
                return CompareResult * sortOrderModifier;
            }
        }



        //protected override void OnMouseMove(DataGridViewCellMouseEventArgs e)
        //{
        //    base.OnMouseMove(e);
        //    state = clicked ? RadioButtonState.CheckedHot :
        //        RadioButtonState.UncheckedHot;
        //}

        //protected override void OnMouseUp(DataGridViewCellMouseEventArgs e)
        //{
        //    base.OnMouseUp(e);
        //    state = clicked ? RadioButtonState.CheckedNormal :
        //        RadioButtonState.UncheckedNormal;
        //}

        //protected override void OnMouseClick(DataGridViewCellMouseEventArgs e)
        //{
        //    base.OnMouseClick(e);
        //}
        // Draw the radio button in the hot state.
        //protected override void OnMouseHover(EventArgs e)
        //{
        //    base.OnMouseHover(e);
        //    state = clicked ? RadioButtonState.CheckedHot :
        //        RadioButtonState.UncheckedHot;
        //    Invalidate();
        //}

        //// Draw the radio button in the hot state.
        //protected override void OnMouseUp(MouseEventArgs e)
        //{
        //    base.OnMouseUp(e);
        //    this.OnMouseHover(e);
        //}

        //// Draw the radio button in the unpressed state.
        //protected override void OnMouseLeave(EventArgs e)
        //{
        //    base.OnMouseLeave(e);
        //    state = clicked ? RadioButtonState.CheckedNormal :
        //        RadioButtonState.UncheckedNormal;
        //    Invalidate();
        //}
    }
}
