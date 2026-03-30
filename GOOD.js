import java.util.Scanner;   // Import Scanner class

public class QuickCartScanner {

    public static void main(String[] args) {

        // Create Scanner object
        Scanner scanner = new Scanner(System.in);

        // === Collect User Input ===
        System.out.print("Enter product name: ");
        String productName = scanner.nextLine();

        System.out.print("Enter quantity sold today: ");
        int quantitySold = scanner.nextInt();

        System.out.print("Enter price per item: ");
        double pricePerItem = scanner.nextDouble();

        System.out.print("Enter number of restocked items: ");
        int restockedItems = scanner.nextInt();

        // === Calculations using Operators ===
        double totalCost = quantitySold * pricePerItem;

        int remainingStock = restockedItems - quantitySold;

        boolean lowStock = remainingStock < 5;

        // === Display Results ===
        System.out.println("\n=== QuickCart Sales Report ===");
        System.out.println("Product: " + productName);
        System.out.println("Total Cost: ₱" + totalCost);
        System.out.println("Remaining Stock: " + remainingStock);
        System.out.println("Low Stock Alert: " + lowStock);

        // Extra Message
        if (lowStock) {
            System.out.println("⚠ Restock soon!");
        }

        // Close Scanner
        scanner.close();
    }
}