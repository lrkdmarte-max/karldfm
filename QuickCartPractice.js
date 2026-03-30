import java.util.Scanner;

public class QuickCartPractice {

    // Method 1: Displays a greeting message at the start of the program
    public static void displayGreeting() {
        System.out.println("Welcome to QuickCart!");
        System.out.println("Let's compute your total for today’s purchase.\n");
    }

    // Method 2: Reads item prices from the user
    public static double readItemPrice(int itemNumber) {
        Scanner sc = new Scanner(System.in);
        System.out.print("Enter price of item " + itemNumber + ": ");
        return sc.nextDouble();
    }

    // Method 3: Calculates subtotal by adding two item prices
    public static double computeSubtotal(double price1, double price2) {
        return price1 + price2;
    }

    // Method 4: Applies a discount if subtotal >= 1000
    public static double applyDiscount(double subtotal, double discountRate) {
        if (subtotal >= 1000) {
            double discount = subtotal * discountRate;
            System.out.printf("Discount applied: ₱%.2f\n", discount);
            return subtotal - discount;
        } else {
            System.out.println("No discount applied.");
            return subtotal;
        }
    }

    // Method 5: Displays the final total amount
    public static void displayTotal(double total) {
        System.out.printf("Total amount due: ₱%.2f\n", total);
    }

    // Method 6: Prints a thank-you message after checkout
    public static void displayThankYou() {
        System.out.println("\nThank you for shopping with QuickCart!");
    }

    // Method 7: Checks for freebie eligibility
    public static void checkFreebie(double total) {
        if (total > 2000) {
            System.out.println("Congratulations! You qualify for a free gift.");
        }
    }

    // Main method: Orchestrates all the steps of QuickCart
    public static void main(String[] args) {

        // Step 1: Greeting
        displayGreeting();

        // Step 2: Read item prices
        double price1 = readItemPrice(1);
        double price2 = readItemPrice(2);

        // Step 3: Compute subtotal
        double subtotal = computeSubtotal(price1, price2);
        System.out.printf("Subtotal: ₱%.2f\n", subtotal);

        // Step 4: Apply discount (10% by default)
        double total = applyDiscount(subtotal, 0.10);

        // Step 5: Display total amount
        displayTotal(total);

        // Step 6: Check freebie eligibility
        checkFreebie(total);

        // Step 7: Thank-you message
        displayThankYou();
    }
}