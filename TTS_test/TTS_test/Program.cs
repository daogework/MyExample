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
        //var speechConfig = SpeechConfig.FromSubscription(YourSubscriptionKey, YourServiceRegion);

        // The language of the voice that speaks.
        //speechConfig.SpeechSynthesisVoiceName = "zh-CN-XiaoyouNeural";

        var speechConfig = SpeechConfig.FromSubscription(YourSubscriptionKey, YourServiceRegion);
        speechConfig.SpeechSynthesisVoiceName = "my-MM-ThihaNeural";
        speechSynthesizer = new SpeechSynthesizer(speechConfig);

        //await Start("my-MM", "ထမင်းစားလို့ရမြီ");
        //await Start("zh-CN-XiaoyouNeural", "鹅鹅鹅111，mother fucker");//慢
        //await Start("zh-CN-XiaoshuangNeural", "鹅鹅鹅222，mother fucker");//快
        //await Start("zh-CN-XiaoyanNeural");
        //await Start("zh-CN-XiaoxuanNeural");
        //await Start("zh-CN-XiaoxiaoNeural");

        //await Start("zh-CN-XiaohanNeural");
        //await Start("zh-CN-XiaochenNeural");//沉闷


        //await Start("zh-CN-XiaoruiNeural");
        //await Start("zh-CN-XiaoqiuNeural");

        using (var speechSynthesizer = new SpeechSynthesizer(speechConfig))
        {
            // Get text from the console and synthesize to the default speaker.
            //Console.WriteLine("Enter some text that you want to speak >");
            string text = "မင်္ဂလာပါ,နေကောင်းလား,ထမင်းစားလို့ရမြီ,ာmother fucker,";

            var speechSynthesisResult = await speechSynthesizer.SpeakTextAsync(text);
            OutputSpeechSynthesisResult(speechSynthesisResult, text);
            //using var stream = AudioDataStream.FromResult(speechSynthesisResult);
            //await stream.SaveToWaveFileAsync("temp/file.wav");

            //using (var audioFile = new AudioFileReader("temp/file.wav"))
            //using (var outputDevice = new WaveOutEvent())
            //{
            //    outputDevice.Init(audioFile);
            //    outputDevice.Play();
            //    while (outputDevice.PlaybackState == PlaybackState.Playing)
            //    {
            //        Thread.Sleep(1000);
            //    }
            //}
        }

        //Console.WriteLine("Press any key to exit...");
        //Console.ReadKey();
    }

    public static SpeechSynthesizer? speechSynthesizer { get; set; }

    static async Task Start(string SpeechSynthesisVoiceName, string text)
    {
        

        // The language of the voice that speaks.
        //speechConfig.SpeechSynthesisVoiceName = SpeechSynthesisVoiceName;
        //using var synthesizer = new SpeechSynthesizer(config, null);

        //using (var speechSynthesizer = new SpeechSynthesizer(speechConfig,null))
        {
            //var ssml = "<speak version=\"1.0\" xmlns=\"https://www.w3.org/2001/10/synthesis\" xml:lang=\"en-US\">\n"+
            //$"<voice name = \"{SpeechSynthesisVoiceName}\">" +
            //text +
            //"</voice> " +
            //"\n</speak>";
            var speechSynthesisResult = await speechSynthesizer.SpeakTextAsync(text);
            //File.WriteAllText("test.xml", ssml);

            //var result = await speechSynthesizer.SpeakSsmlAsync(ssml);
            //using var stream = AudioDataStream.FromResult(result);
            //await stream.SaveToWaveFileAsync(SpeechSynthesisVoiceName+"_tempfile.wav");



            //var r = await speechSynthesizer.GetVoicesAsync();
            OutputSpeechSynthesisResult(speechSynthesisResult, text);
        }
    }
}