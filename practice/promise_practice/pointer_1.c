#include <stdio.h>

main(){
    int myNumbers[4] = {25, 50, 75, 100};
    int i;

    for (i = 0; i < 4; i++){
        printf("%p\n", &myNumbers[i]);
    }

    int myInt;
    printf("%lu\n", sizeof(myInt));
    printf("%lu\n", sizeof(myNumbers));
    printf("%p\n", myNumbers);
    printf("%d\n", *myNumbers);
    printf("%d\n", *(myNumbers+1));
    printf("%p\n", &myNumbers[0]);

    int *ptr = myNumbers;
    printf("%d\n", *ptr);
    int j;

    for (j = 0; j < 4; j++){
        printf("%d\n", *(ptr + j));
    }

    int myNum;
    char myChar;
    printf("Type a number: \n");
    scanf("%d %c", &myNum, &myChar);
    printf("Your number is %d\n", myNum);
    printf("Your character is: %c\n", myChar);
}