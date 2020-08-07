package Package;

import java.util.Scanner;

public class playWithNumbers {
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		System.out.println("Enter a number : ");
		int num = sc.nextInt(),count = 0;
		
		for(int i=1; i<=num; i++) {
			
			if (num%i == 0) {
				count++;
			}
		}
		
		if (count ==2) {
			System.out.println("The number is a prime number");
		}
		
		else {
			System.out.println("The number is NOT a prime number");
		}
		
		
	}
}
