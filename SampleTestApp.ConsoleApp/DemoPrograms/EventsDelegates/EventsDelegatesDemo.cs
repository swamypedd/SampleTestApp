namespace SampleTestApp.ConsoleApp.DemoPrograms.EventsDelegates
{
    public class VideoEventArgs : EventArgs
    {
        public Video Video { get; set; }
    }

    public class Video
    {
        public string Title { get; set; } = "";
    }

    public class EventsDelegatesDemo
    {
        public static void EventsDelegatesDemoMethod()
        {
            var video = new Video { Title = "Video 1" };
            var videoEncoder = new VideoEncoder(); //publisher
            var mailService = new MailService(); //subscriber
            var smsService = new MessageService(); //subscriber
            videoEncoder.VideoEncoded += mailService.OnVideoEncoded;
            videoEncoder.VideoEncoded += smsService.OnVideoEncoded;
            videoEncoder.EncodeVideo(video);
        }
    }

    public class VideoEncoder
    {
        //1. Define a delegate
        //2. Define an event based on that delegate
        //3. Raise the event

        //public delegate void VideoEncodedEventHandler(object source, VideoEventArgs args);
        //public event VideoEncodedEventHandler VideoEncoded;
        public event EventHandler<VideoEventArgs> VideoEncoded;

        public void EncodeVideo(Video video)
        {
            Console.WriteLine("Encode Video...");
            Thread.Sleep(3000);
            OnVideoEncoded(video);
        }

        protected virtual void OnVideoEncoded(Video video)
        {
            VideoEncoded?.Invoke(this, new VideoEventArgs() { Video = video });
        }
    }

    public class MailService
    {
        public void OnVideoEncoded(object source, VideoEventArgs args)
        {
            Console.WriteLine("Mail Service: Sending Email " + args.Video.Title);
        }
    }

    public class MessageService
    {
        public void OnVideoEncoded(object source, VideoEventArgs args)
        {
            Console.WriteLine("Message Service: Sending Message " + args.Video.Title);
        }
    }
}