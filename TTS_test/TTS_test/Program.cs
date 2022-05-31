using System;
using System.IO;
using System.Threading.Tasks;
using Microsoft.CognitiveServices.Speech;
using Microsoft.CognitiveServices.Speech.Audio;
using NAudio.Wave;
using TTS_test;

class Program
{
    static string YourSubscriptionKey = Key.MyKey;
    static string YourServiceRegion = "eastasia";

    static void OutputSpeechSynthesisResult(SpeechSynthesisResult speechSynthesisResult, string text)
    {
        switch (speechSynthesisResult.Reason)
        {
            case ResultReason.SynthesizingAudioCompleted:
                Console.WriteLine($"Speech synthesized for text: [{text}]");
                break;
            case ResultReason.Canceled:
                var cancellation = SpeechSynthesisCancellationDetails.FromResult(speechSynthesisResult);
                Console.WriteLine($"CANCELED: Reason={cancellation.Reason}");

                if (cancellation.Reason == CancellationReason.Error)
                {
                    Console.WriteLine($"CANCELED: ErrorCode={cancellation.ErrorCode}");
                    Console.WriteLine($"CANCELED: ErrorDetails=[{cancellation.ErrorDetails}]");
                    Console.WriteLine($"CANCELED: Did you set the speech resource key and region values?");
                }
                break;
            default:
                break;
        }
    }

    async static Task Main(string[] args)
    {
        var speechConfig = SpeechConfig.FromSubscription(YourSubscriptionKey, YourServiceRegion);

        // The language of the voice that speaks.
        speechConfig.SpeechSynthesisVoiceName = "zh-CN-XiaoyouNeural";

        await Start("zh-CN-XiaoyouNeural");//慢
        await Start("zh-CN-XiaoshuangNeural");//快
        //await Start("zh-CN-XiaoyanNeural");
        //await Start("zh-CN-XiaoxuanNeural");
        //await Start("zh-CN-XiaoxiaoNeural");

        //await Start("zh-CN-XiaohanNeural");
        //await Start("zh-CN-XiaochenNeural");//沉闷


        //await Start("zh-CN-XiaoruiNeural");
        //await Start("zh-CN-XiaoqiuNeural");

        //using (var speechSynthesizer = new SpeechSynthesizer(speechConfig))
        //{
        //    // Get text from the console and synthesize to the default speaker.
        //    //Console.WriteLine("Enter some text that you want to speak >");
        //    string text = "鹅鹅鹅，曲项向天歌";

        //    var speechSynthesisResult = await speechSynthesizer.SpeakTextAsync(text);
        //    OutputSpeechSynthesisResult(speechSynthesisResult, text);
        //    //using var stream = AudioDataStream.FromResult(speechSynthesisResult);
        //    //await stream.SaveToWaveFileAsync("temp/file.wav");

        //    //using (var audioFile = new AudioFileReader("temp/file.wav"))
        //    //using (var outputDevice = new WaveOutEvent())
        //    //{
        //    //    outputDevice.Init(audioFile);
        //    //    outputDevice.Play();
        //    //    while (outputDevice.PlaybackState == PlaybackState.Playing)
        //    //    {
        //    //        Thread.Sleep(1000);
        //    //    }
        //    //}
        //}

        Console.WriteLine("Press any key to exit...");
        Console.ReadKey();
    }

    static async Task Start(string SpeechSynthesisVoiceName)
    {
        var speechConfig = SpeechConfig.FromSubscription(YourSubscriptionKey, YourServiceRegion);

        // The language of the voice that speaks.
        speechConfig.SpeechSynthesisVoiceName = SpeechSynthesisVoiceName;

        using (var speechSynthesizer = new SpeechSynthesizer(speechConfig))
        {
            string text = "鹅鹅鹅，曲项向天歌。白毛浮绿水，红掌拨清波。mother fucker";

            var speechSynthesisResult = await speechSynthesizer.SpeakTextAsync(text);
            OutputSpeechSynthesisResult(speechSynthesisResult, text);
        }
    }
}