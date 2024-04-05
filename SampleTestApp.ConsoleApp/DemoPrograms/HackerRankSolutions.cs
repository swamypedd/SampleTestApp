using System.Numerics;

namespace SampleTestApp.ConsoleApp.DemoPrograms
{
    internal class HackerRankSolutions
    {
        public static void PositiveNegativeProportions(List<int> arr = null)
        {
            arr = new List<int>() { 10, 5, 0, -6, 4, -5, 5, -2, 5, 0, 0, 5, 0, 0 };

            int positiveCount = 0, negativeCount = 0, zeroCount = 0;

            foreach (var element in arr)
            {
                if (element == 0)
                {
                    zeroCount++;
                }
                else if (element > 0)
                {
                    positiveCount++;
                }
                else if (element < 0)
                {
                    negativeCount++;
                }
            }

            Console.WriteLine($"{((decimal)positiveCount / arr.Count).ToString("N6")}");
            Console.WriteLine($"{((decimal)negativeCount / arr.Count).ToString("N6")}");
            Console.WriteLine($"{((decimal)zeroCount / arr.Count).ToString("N6")}");
        }

        public static void MinMaxSum(List<int> arr = null)
        {
            arr = new List<int>() { 1, 3, 5, 7, 9 };

            arr = new List<int>() { 256741038, 623958417, 467905213, 714532089, 938071625 };

            BigInteger minSum = 0;
            BigInteger maxSum = 0;

            foreach (var element in arr.OrderBy(x => x).Take(4))
            {
                minSum = minSum + element;
            }

            foreach (var element in arr.OrderByDescending(x => x).Take(4))
            {
                maxSum = maxSum + element;
            }

            Console.WriteLine($"{minSum} {maxSum}");
        }

        public static void TimeConversion(string s = "12:01:00AM")
        {
            DateTime myDate = DateTime.ParseExact($"1988-02-15 {s}", "yyyy-MM-dd hh:mm:sstt",
                                                       System.Globalization.CultureInfo.InvariantCulture);

            Console.WriteLine(myDate.ToString("HH:mm:ss"));
        }

        public static void GetLonelyInteger(List<int> arr = null)
        {
            arr = new List<int>() { 1, 2, 3, 4, 3, 2, 1 };

            int lonelyInteger = arr.GroupBy(c => c)
                .Select(c => new
                {
                    item = c.Key,
                    count = c.Count()
                })
                .Where(c => c.count == 1)
                .Select(c => c.item)
                .First();

            Console.WriteLine($"Lonely Integer : {lonelyInteger}");
        }

        public static void DiagonalDifference(List<List<int>> arr = null)
        {
            arr = new List<List<int>>()
            {
                new List<int>() {1, 2, 3, 4},
                new List<int>() {5, 6, 7, 8},
                new List<int>() {9, 10, 11, 12},
                new List<int>() {13, 14, 15, 16},
            };

            int leftDiagonalSum = 0, rightDiagonalSum = 0;
            int i = 0, j = 0;

            while (i < arr.Count && j < arr.Count)
            {
                Console.WriteLine($"I: {i} J: {j}   {arr[i][j]}");
                leftDiagonalSum = leftDiagonalSum + arr[i][j];
                i++; j++;
            }

            i = 0; j = arr.Count - 1;

            while (i < arr.Count && j >= 0)
            {
                Console.WriteLine($"I: {i}   J: {j}   {arr[i][j]}");
                rightDiagonalSum = rightDiagonalSum + arr[i][j];
                i++; j--;
            }

            Console.WriteLine($"{leftDiagonalSum} {rightDiagonalSum} {Math.Abs(leftDiagonalSum - rightDiagonalSum)}");
        }

        public static void CountBitsAndPieces(string S = "BAAADSNSAAABBBANFSFANDSSDGNNDFGHADHBAFHFGHFGH", string bits = "BANANA")
        {
            char[] givenChars = S.ToCharArray();
            char[] bitsChars = bits.ToCharArray().Distinct().ToArray();
            var givenCharCounts = givenChars.Where(c => bitsChars.Contains(c))
                                .GroupBy(c => c)
                                .Select(c => new { character = c.Key, count = c.Count() })
                                .ToList();

            // B - 1, A - 3, N - 2

            int[] counts = new int[3];

            var bCount = givenCharCounts.Where(c => c.character == 'B').Select(c => c.count).First() / 1;
            var aCount = givenCharCounts.Where(c => c.character == 'A').Select(c => c.count).First() / 3;
            var nCount = givenCharCounts.Where(c => c.character == 'N').Select(c => c.count).First() / 2;

            counts[0] = bCount;
            counts[1] = nCount;
            counts[2] = aCount;

            Console.WriteLine($"BananaCount : {counts.OrderBy(c => c).First()}");
        }
    }
}