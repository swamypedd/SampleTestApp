using System.Numerics;

namespace SampleTestApp.ConsoleApp.DemoPrograms
{
    internal static class DemoSolutions
    {
        public static void MultiplicationCalculator(int number, long target)
        {
            // (X * (10 ^ i)) + X

            var count = 0;
            BigInteger product = number;

            while (product <= target)
            {
                count++;
                product = number * (BigInteger)(Math.Pow(number, count)) + number;
                Console.WriteLine($"{count} \t {product}");
            }
        }
    }
}
