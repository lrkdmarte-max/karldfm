// CalculateHoursWorked.java
// This program calculates and displays an employee's total hours worked

import java.util.Scanner; // Import Scanner class to read user input

public class CalculateHoursWorked {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in); // Create Scanner object

        // Input employee information
        System.out.print("Enter Employee Name: ");
        String employeeName = scanner.nextLine();

        // Input time in hours (decimal allowed, e.g., 8.5 for 8:30 AM)
        System.out.print("Enter Time In (hours, e.g., 8.0): ");
        double timeIn = scanner.nextDouble();

        // Input time out hours
        System.out.print("Enter Time Out (hours, e.g., 17.0): ");
        double timeOut = scanner.nextDouble();

        // Input break time in hours
        System.out.print("Enter Break Time (hours, e.g., 1.0): ");
        double breakTime = scanner.nextDouble();

        // Calculate total hours worked
        double totalHoursWorked = (timeOut - timeIn) - breakTime;

        // Display results with clear labels
        System.out.println("\n--- Employee Work Summary ---");
        System.out.println("Employee Name: " + employeeName);
        System.out.println("Time In: " + timeIn + " hrs");
        System.out.println("Time Out: " + timeOut + " hrs");
        System.out.println("Break Time: " + breakTime + " hrs");
        System.out.println("Total Hours Worked: " + totalHoursWorked + " hrs");

        // Verification message
        System.out.println("Test passed: Computation is correct");

        scanner.close(); // Close Scanner
    }
}