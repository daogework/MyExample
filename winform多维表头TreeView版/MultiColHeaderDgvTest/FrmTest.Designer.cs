namespace MultiColHeaderDgvTest
{
    partial class FrmTest
    {
        /// <summary>
        /// Required designer variable.
        /// </summary>
        private System.ComponentModel.IContainer components = null;

        /// <summary>
        /// Clean up any resources being used.
        /// </summary>
        /// <param name="disposing">true if managed resources should be disposed; otherwise, false.</param>
        protected override void Dispose(bool disposing)
        {
            if (disposing && (components != null))
            {
                components.Dispose();
            }
            base.Dispose(disposing);
        }

        #region Windows Form Designer generated code

        /// <summary>
        /// Required method for Designer support - do not modify
        /// the contents of this method with the code editor.
        /// </summary>
        private void InitializeComponent()
        {
            System.Windows.Forms.TreeNode treeNode1 = new System.Windows.Forms.TreeNode("Node0");
            System.Windows.Forms.TreeNode treeNode2 = new System.Windows.Forms.TreeNode("Node1");
            System.Windows.Forms.TreeNode treeNode3 = new System.Windows.Forms.TreeNode("Node1", new System.Windows.Forms.TreeNode[] {
            treeNode1,
            treeNode2});
            System.Windows.Forms.TreeNode treeNode4 = new System.Windows.Forms.TreeNode("Node2");
            System.Windows.Forms.TreeNode treeNode5 = new System.Windows.Forms.TreeNode("�ڵ�1");
            System.Windows.Forms.TreeNode treeNode6 = new System.Windows.Forms.TreeNode("Node3", new System.Windows.Forms.TreeNode[] {
            treeNode5});
            System.Windows.Forms.TreeNode treeNode7 = new System.Windows.Forms.TreeNode("Node2", new System.Windows.Forms.TreeNode[] {
            treeNode4,
            treeNode6});
            System.Windows.Forms.TreeNode treeNode8 = new System.Windows.Forms.TreeNode("�ڵ�3");
            System.Windows.Forms.TreeNode treeNode9 = new System.Windows.Forms.TreeNode("�ڵ�4");
            System.Windows.Forms.TreeNode treeNode10 = new System.Windows.Forms.TreeNode("�ڵ�5");
            System.Windows.Forms.TreeNode treeNode11 = new System.Windows.Forms.TreeNode("�ڵ�6");
            System.Windows.Forms.TreeNode treeNode12 = new System.Windows.Forms.TreeNode("�ڵ�7");
            System.Windows.Forms.TreeNode treeNode13 = new System.Windows.Forms.TreeNode("�ڵ�8");
            System.Windows.Forms.TreeNode treeNode14 = new System.Windows.Forms.TreeNode("�ڵ�9");
            System.Windows.Forms.TreeNode treeNode15 = new System.Windows.Forms.TreeNode("Node0", new System.Windows.Forms.TreeNode[] {
            treeNode3,
            treeNode7,
            treeNode8,
            treeNode9,
            treeNode10,
            treeNode11,
            treeNode12,
            treeNode13,
            treeNode14});
            System.Windows.Forms.DataGridViewCellStyle dataGridViewCellStyle1 = new System.Windows.Forms.DataGridViewCellStyle();
            this.button1 = new System.Windows.Forms.Button();
            this.treeView2 = new System.Windows.Forms.TreeView();
            this.multiColHeaderDgv2 = new myMultiColHeaderDgv.MultiColHeaderDgv();
            ((System.ComponentModel.ISupportInitialize)(this.multiColHeaderDgv2)).BeginInit();
            this.SuspendLayout();
            // 
            // button1
            // 
            this.button1.Location = new System.Drawing.Point(-2, 1);
            this.button1.Name = "button1";
            this.button1.Size = new System.Drawing.Size(75, 23);
            this.button1.TabIndex = 1;
            this.button1.Text = "Load";
            this.button1.UseVisualStyleBackColor = true;
            this.button1.Click += new System.EventHandler(this.button1_Click);
            // 
            // treeView2
            // 
            this.treeView2.Location = new System.Drawing.Point(454, 26);
            this.treeView2.Name = "treeView2";
            treeNode1.Name = "Node0";
            treeNode1.Text = "Node0";
            treeNode2.Name = "Node1";
            treeNode2.Text = "Node1";
            treeNode3.Name = "Node1";
            treeNode3.Text = "Node1";
            treeNode4.Name = "Node2";
            treeNode4.Text = "Node2";
            treeNode5.Name = "�ڵ�1";
            treeNode5.Text = "�ڵ�1";
            treeNode6.Name = "Node3";
            treeNode6.Text = "Node3";
            treeNode7.Name = "Node2";
            treeNode7.Text = "Node2";
            treeNode8.Name = "�ڵ�3";
            treeNode8.Text = "�ڵ�3";
            treeNode9.Name = "�ڵ�4";
            treeNode9.Text = "�ڵ�4";
            treeNode10.Name = "�ڵ�5";
            treeNode10.Text = "�ڵ�5";
            treeNode11.Name = "�ڵ�6";
            treeNode11.Text = "�ڵ�6";
            treeNode12.Name = "�ڵ�7";
            treeNode12.Text = "�ڵ�7";
            treeNode13.Name = "�ڵ�8";
            treeNode13.Text = "�ڵ�8";
            treeNode14.Name = "�ڵ�9";
            treeNode14.Text = "�ڵ�9";
            treeNode15.Name = "Band";
            treeNode15.Text = "Node0";
            this.treeView2.Nodes.AddRange(new System.Windows.Forms.TreeNode[] {
            treeNode15});
            this.treeView2.Size = new System.Drawing.Size(121, 202);
            this.treeView2.TabIndex = 3;
            // 
            // multiColHeaderDgv2
            // 
            this.multiColHeaderDgv2.AllowUserToAddRows = false;
            this.multiColHeaderDgv2.AllowUserToDeleteRows = false;
            this.multiColHeaderDgv2.AllowUserToResizeRows = false;
            dataGridViewCellStyle1.Alignment = System.Windows.Forms.DataGridViewContentAlignment.MiddleLeft;
            dataGridViewCellStyle1.BackColor = System.Drawing.SystemColors.Control;
            dataGridViewCellStyle1.Font = new System.Drawing.Font("Microsoft Sans Serif", 9F);
            dataGridViewCellStyle1.ForeColor = System.Drawing.Color.DodgerBlue;
            dataGridViewCellStyle1.SelectionBackColor = System.Drawing.SystemColors.Highlight;
            dataGridViewCellStyle1.SelectionForeColor = System.Drawing.SystemColors.HighlightText;
            dataGridViewCellStyle1.WrapMode = System.Windows.Forms.DataGridViewTriState.True;
            this.multiColHeaderDgv2.ColumnHeadersDefaultCellStyle = dataGridViewCellStyle1;
            this.multiColHeaderDgv2.ColumnHeadersHeight = 18;
            this.multiColHeaderDgv2.ColumnHeadersHeightSizeMode = System.Windows.Forms.DataGridViewColumnHeadersHeightSizeMode.DisableResizing;
            this.multiColHeaderDgv2.Location = new System.Drawing.Point(-2, 26);
            this.multiColHeaderDgv2.myColHeaderTreeView = this.treeView2;
            this.multiColHeaderDgv2.Name = "multiColHeaderDgv2";
            this.multiColHeaderDgv2.RowTemplate.Height = 18;
            this.multiColHeaderDgv2.Size = new System.Drawing.Size(312, 145);
            this.multiColHeaderDgv2.TabIndex = 2;
            // 
            // FrmTest
            // 
            this.AutoScaleDimensions = new System.Drawing.SizeF(6F, 12F);
            this.AutoScaleMode = System.Windows.Forms.AutoScaleMode.Font;
            this.ClientSize = new System.Drawing.Size(577, 232);
            this.Controls.Add(this.treeView2);
            this.Controls.Add(this.multiColHeaderDgv2);
            this.Controls.Add(this.button1);
            this.Name = "FrmTest";
            this.Text = "Form1";
            ((System.ComponentModel.ISupportInitialize)(this.multiColHeaderDgv2)).EndInit();
            this.ResumeLayout(false);

        }

        #endregion

        private System.Windows.Forms.Button button1;
        private myMultiColHeaderDgv.MultiColHeaderDgv multiColHeaderDgv2;
        private System.Windows.Forms.TreeView treeView2;
    }
}

