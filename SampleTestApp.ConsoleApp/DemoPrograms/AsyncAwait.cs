namespace SampleTestApp.ConsoleApp.DemoPrograms
{
    internal class AsyncAwait
    {
        public static async Task Maining(string[] args = null)
        {
            await DownloadPageAsync();
            Console.WriteLine("Page downloaded successfully.");
        }

        public static async Task DownloadPageAsync()
        {
            using (HttpClient client = new HttpClient())
            {
                string url = "https://example.com";
                string page = await client.GetStringAsync(url);
                Console.WriteLine(page);
            }
        }
    }
}