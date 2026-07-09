import org.junit.After;
import org.junit.Before;
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class LifecycleAndAAATest {

    private String testString;

    @Before
    public void setUp() {
        System.out.println("Running Setup...");
        testString = "Cognizant";
    }

    @After
    public void tearDown() {
        System.out.println("Running Teardown...");
        testString = null;
    }

    @Test
    public void testStringLengthUsingAAA() {
        int expectedLength = 9;
        
        int actualLength = testString.length();
        
        assertEquals(expectedLength, actualLength);
    }
    
    @Test
    public void testStringConcatenationUsingAAA() {
        
        String suffix = " FSE";
        String expectedResult = "Cognizant FSE";
        String actualResult = testString + suffix;
        
        assertEquals(expectedResult, actualResult);
    }
}