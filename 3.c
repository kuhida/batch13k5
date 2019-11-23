#include <stdio.h>

int arkademy(int input){
    int i;
    for(i=1;i<=input;i++){
        if(i%3==0){
            printf("Arka, ");
        }else if(i%7==0){
            printf("Demy, ");
        }else{
            printf("%d, ",i);
        }
    }
}

int main()
{
    int input;
    int i;
    scanf("%d",&input);
    arkademy(input);
    return 0;
}