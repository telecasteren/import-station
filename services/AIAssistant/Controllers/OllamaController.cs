using Microsoft.AspNetCore.Mvc;
using RestSharp;
using System.Text.Json;

namespace AIAssistant.Controllers
{
  [ApiController]
  [Route("api/[controller]")]
  public class OllamaController : ControllerBase
  {
    private readonly RestClient _client;

    public OllamaController()
    {
      _client = new RestClient("http://localhost:11434");
      Console.WriteLine("Initialized OllamaController");
    }

    [HttpPost("ask")]
    public async Task<IActionResult> Ask([FromBody] AskRequest request)
    {

      Console.WriteLine("Received prompt: " + request.Prompt);

      var body = new
      {
        model = "mistral",
        prompt = request.Prompt,
        stream = false
      };

      var restRequest = new RestRequest("api/generate", Method.Post);
      restRequest.AddJsonBody(body);

      var response = await _client.ExecuteAsync(restRequest);

      Console.WriteLine("Ollama response: " + response.Content);

      if (!response.IsSuccessful)
      return StatusCode(500, "Failed response from Ollama");

      var result = JsonSerializer.Deserialize<OllamaResponse>(response.Content!);
      return Ok(new { response = result?.response });
    }
  }

  public class AskRequest{
    public string Prompt { get; set; }
  }

  public class OllamaResponse
  {
    public string response { get; set; }
  }
}