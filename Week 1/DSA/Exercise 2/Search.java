
import java.util.Arrays;
import java.util.Comparator;

class Product {
    int productId;
    String productName;
    String category;

    public Product(int productId, String productName, String category) {
        this.productId = productId;
        this.productName = productName;
        this.category = category;
    }

    public void display() {
        System.out.println(productId + " - " + productName + " - " + category);
    }
}

public class Search {

    public static Product linearSearch(Product[] products, String targetName) {

        for (Product product : products) {
            if (product.productName.equalsIgnoreCase(targetName)) {
                return product;
            }
        }

        return null;
    }

    public static Product binarySearch(Product[] products, String targetName) {

        int left = 0;
        int right = products.length - 1;

        while (left <= right) {

            int mid = (left + right) / 2;

            int comparison =
                    products[mid].productName.compareToIgnoreCase(targetName);

            if (comparison == 0) {
                return products[mid];
            }

            else if (comparison < 0) {
                left = mid + 1;
            }

            else {
                right = mid - 1;
            }
        }

        return null;
    }

    public static void main(String[] args) {

        Product[] products = {
                new Product(101, "Laptop", "Electronics"),
                new Product(102, "Shoes", "Fashion"),
                new Product(103, "Phone", "Electronics"),
                new Product(104, "Watch", "Accessories"),
                new Product(105, "Bag", "Fashion")
        };

        System.out.println("Linear Search Result:");
        Product result1 = linearSearch(products, "Phone");

        if (result1 != null) {
            result1.display();
        } else {
            System.out.println("Product not found");
        }

        Arrays.sort(products, Comparator.comparing(p -> p.productName));

        System.out.println("\nBinary Search Result:");
        Product result2 = binarySearch(products, "Phone");

        if (result2 != null) {
            result2.display();
        } else {
            System.out.println("Product not found");
        }
    }
}
