package Package;

import java.util.Scanner;

public class practice_2 {
	
	public static void main(String[] args) {
		
		// approach 1
	
	Scanner sc = new Scanner(System.in);
	System.out.println("Enter number a : ");
	int a = sc.nextInt();
	
	System.out.println("Enter number b : ");
	int b = sc.nextInt(); 
	
	System.out.println("Enter number c : ");
	int c = sc.nextInt();
	
	if (a > b && a > c)
	{
		System.out.println("The largest number is a");
	}
	
	else if ((b > a && b > c))
	{
		System.out.println("The largest number is a");
	}
	else
	{
		System.out.println("The largest number is c");
	}
	
	//approach 2 - Tertary Operator
	
	int largest = a>b?a:b;
	int largest1 = largest > c? largest: c;
	
	System.out.println("The largest number is : " + largest1);
	
	// fiboncacci series
	
	int n1 = 0, n2 = 1, sum = 0;
	
	System.out.println(n1 +"\n"+ n2);
	
	for (int i = 2; i < 10; i++)
	{
		sum = n1+ n2;
		System.out.println("\n" + sum);
		n1 = n2;
		n2 = sum;		
		
	}
	
	
	
	}
	
	

}
