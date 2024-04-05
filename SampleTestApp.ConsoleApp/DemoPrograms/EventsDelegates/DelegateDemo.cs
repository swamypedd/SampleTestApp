namespace SampleTestApp.ConsoleApp.DemoPrograms.EventsDelegates
{
    internal class DelegateDemo
    {
        // Delegate declaration.
        private delegate void MyDelegate(int x, int y);

        public static void InvokeDelegateDemo()
        {
            Calculator calculator = new Calculator();

            // Create delegate instances
            MyDelegate myDelegate = new MyDelegate(calculator.Add);
            myDelegate += calculator.Subtract;

            // Invoke delegate instances
            myDelegate(15, 5);
        }
    }

    public class Calculator
    {
        public void Add(int x, int y)
        {
            Console.WriteLine($"Addition of {x} {y} is: {x + y}");
        }

        public void Subtract(int x, int y)
        {
            Console.WriteLine($"Subtraction of {x} {y} is: {x - y}");
        }
    }
}