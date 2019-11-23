#include <stdio.h>
int count_occur(int a[], int num_elements, int value){
   int i, count=0;
   for (i=0; i<num_elements; i++)
   {
	 if (a[i] == value)
	 {
		count++;
	 }
   }
   return(count);
}

int main()
{
   int a[10] = {5,13,14,5,9,20,9,5,14};
   int num_occ, value, pair = 0;


   for(value=0; value<100; value++)
   {
	  num_occ = count_occur(a, 10, value);
	  if(num_occ >= 2){
	      pair++;
	  }
   }
   
   printf("%d pair", pair);
   
   return 0;
}