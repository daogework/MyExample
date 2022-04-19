#include <windows.h>
#include<stdio.h>
//回调函数
LRESULT CALLBACK WinProc(HWND hwnd,UINT message,WPARAM wParam,LPARAM lParam)
{
	switch(message)
	{
	case WM_CLOSE:
		DestroyWindow(hwnd);
		PostQuitMessage(0);
		break;
	default:
		return DefWindowProc(hwnd,message,wParam,lParam);
	}
	return 0;
}



void test(int *a) {
	int* p = a[1];
	printf("%d\n");
}

//主函数入口
//int WINAPI WinMain(HINSTANCE hInstance,HINSTANCE hPrevInstance,LPSTR szCmdLine,int iCmdShow)
int main()
{
	
	int a[3][3] = {10,2,3, 4,5,6, 7,8,9};
	int* p = a;
	int b = p[0];
	int* p2 = p + 3;
	int c = p2[0];

	int d = p[8];
	int e = a[0];

	return 0;
	//test(a);

	//HINSTANCE hInstance = GetModuleHandle(0);
	//TCHAR szname[]=TEXT("classname");
	//HWND hwnd;
	//MSG msg;
	//ZeroMemory(&msg,sizeof(msg));
	//WNDCLASS wndclass;
	//wndclass.style=CS_HREDRAW | CS_VREDRAW;
	//wndclass.lpfnWndProc=WinProc;
	//wndclass.cbClsExtra=0;
	//wndclass.cbWndExtra=0;
	//wndclass.hbrBackground=(HBRUSH)GetStockObject(WHITE_BRUSH);
	//wndclass.hCursor=LoadCursor(NULL,IDC_ARROW);
	//wndclass.hIcon=LoadIcon(NULL,IDI_APPLICATION);
	//wndclass.hInstance=hInstance;
	//wndclass.lpszClassName=szname;
	//wndclass.lpszMenuName=NULL;
	//RegisterClass(&wndclass);//注册窗口类
	//hwnd=CreateWindow(szname,TEXT("窗口"),WS_OVERLAPPEDWINDOW ,CW_USEDEFAULT,CW_USEDEFAULT,CW_USEDEFAULT,CW_USEDEFAULT,NULL,NULL,hInstance,NULL);
	//if(hwnd)
	//	ShowWindow(hwnd,SW_SHOW);
	//else
	//{
	//	MessageBox(NULL,TEXT("创建窗口失败！"),TEXT("提示"),MB_OK);
	//	UnregisterClass(szname,hInstance);
	//	return 1;
	//}
	//UpdateWindow(hwnd);
	//
	//while(GetMessage(&msg,hwnd,0,0)>0)
	//{
	//	TranslateMessage(&msg);
	//	DispatchMessage(&msg);
	//}
	//UnregisterClass(szname,hInstance);
	//return msg.wParam;
}
