package Package;

import java.util.Scanner;


public class practice_3 {

	public static void main(String[] args) {
	// reverse a string using for
		
		//Scanner sc = new Scanner(System.in);
		//int original = sc.nextInt();
		
		String original = "Ramya", reverse = "";
		
		int length =  original.length();
		
		for (int i = length-1 ;i>= 0; i--) {
			reverse = reverse + original.charAt(i);
		}
		
		System.out.println("The reversed string is : " + reverse);
	
	}
	
}
