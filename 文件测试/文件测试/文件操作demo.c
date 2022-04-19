//本Demo只做了插入，如果能把删除做完，说明对C语言基本逻辑和原理已经完全掌握
#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct {
	int id;
	int grade;
	char name[32];
}Student;

void PrintStudent(Student* pStudent) {
	printf("id:%d 名字:%s 成绩:%d \n", pStudent->id, pStudent->name, pStudent->grade);
}


int InsertDataToList(char** list, size_t* list_size, char* data, size_t datasize) {
	size_t lastsize = *list_size;
	(*list_size)+=datasize;
	if (*list == NULL) {
		*list = malloc(*list_size);
	}
	else {
		char* last_list = *list;
		*list = realloc(last_list , *list_size);
		if (*list == NULL) {
			*list = last_list;
			return 0;
		}
	}
	memcpy(*list + lastsize, data, datasize);//把data插入到末尾，这里使用了指针偏移
	return 1;
}


#define BUFF_SIZE 10 //有考虑过修改这里的数值会发生什么吗
//考虑一下使用宏定义来取代sizeof(Student)

int main() {

	FILE* file = fopen("test.test", "ab+");

	//用char仅仅是为了表现C语言的本质，使用Student去获取更方便
	char buff[sizeof(Student)* BUFF_SIZE];

	char* list = 0;
	size_t list_size = 0;

	while (1)
	{
		size_t size = fread(buff, sizeof(Student), BUFF_SIZE, file);
		Student* pStudent = (Student*)buff;
		if (size > 0) {
			InsertDataToList(&list, &list_size, buff, size * sizeof(Student));
		}
		else 
			break;
	}
	int read_size = list_size;
	int read_number = list_size / sizeof(Student);
	printf("读取到 %d 个学生信息\n", read_number);
	if (list) {
		Student* pStudent = (Student*)list;
		for (size_t i = 0; i < read_number; i++)
		{
			PrintStudent(&pStudent[i]);
		}
	}
	
	printf("是否插入学生信息？Y/N ");

	char c = getchar();
	while (c == 'Y' || c == 'y') {
		Student student = { list_size / sizeof(Student) + 100};
		printf("输入学生信息:");
		int count = scanf("%s %d", &student.name, &student.grade);
		if (count != 2) {
			printf("输入错误!\n");
			setbuf(stdin, 0);//清空输入
		}
		else {
			InsertDataToList(&list, &list_size, (char*)&student, sizeof(Student));
			printf("是否继续插入学生信息？Y/N ");
			setbuf(stdin, 0);//清空输入
			c = getchar();
		}
	}
	
	if (list) { 
		Student* pStudent = (Student*)list;
		printf("最后的文件信息:\n");
		for (size_t i = 0; i < list_size / sizeof(Student); i++)
		{
			PrintStudent(&pStudent[i]);
		}
		fwrite(list + read_size, 1, list_size - read_size, file);
		free(list);
	}
	
	
	fclose(file);
	return 0;
}