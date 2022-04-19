#include<string.h>
#include<stdio.h>
#include <stdlib.h>

void main() {
	FILE* pFile = fopen("test.txt","r");
	int len = 2;
	double* a, * b, * c;

	if (!pFile) { printf("ÎÄ¼þ¶ÁÈ¡Ê§°Ü"); return; }

	a = malloc(len * sizeof(double));
	b = malloc(len * sizeof(double));
	c = malloc(len * sizeof(double));

	int count = 0;
	while (1)
	{
		int n = fscanf(pFile,"%lf %lf %lf",&a[count],&b[count],&c[count]);
		if (n <= 0)break;
		count++;
		if (count >= len) {
			len *= 2;
			double* a2, * b2, * c2;
			a2 = a;
			b2 = b;
			c2 = c;
			a = realloc(a2, len * sizeof(double));
			b = realloc(b2, len * sizeof(double));
			c = realloc(c2, len * sizeof(double));
		}
	}
	for (size_t i = 0; i < count; i++)
	{
		printf("%lf %lf %lf\n", a[i], b[i], c[i]);
	}
	fclose(pFile);
	free(a);
	free(b);
	free(c);
}