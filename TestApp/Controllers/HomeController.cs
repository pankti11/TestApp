using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;
using System.Web.Script.Serialization;
namespace TestApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetData()
        {
            string text = "Hello";
            //var json = ReadFile(@"C:\Users\310285056\Desktop\LeavingConfigMode.feature");
            return Json(new { Name = text }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ReadFile(string path)
        {
            string _filePath = @path;
            try
            {
                string[] lines = System.IO.File.ReadAllLines(_filePath);
                List<String> headerLines = new List<string>();
                //for (int i = 0; i < lines.Length; i++)
                //{
                //    if (lines[i].StartsWith("@"))
                //    {
                //        headerLines.Add(lines[i);
                //    }
                //}


                List<String> _content = lines.ToList();
                headerLines.AddRange(_content.Where(i => i.StartsWith("@")).Select(i => i).ToList());
                _content.Remove("");
                foreach (var i in headerLines)
                {
                    _content.Remove(i);
                }
                var jsonSerializer = new JavaScriptSerializer();
                var jsonObject = jsonSerializer.Serialize(_content);
                var headerObject = jsonSerializer.Serialize(headerLines);
                return Json(new
                {
                    data = jsonObject,
                    header = headerObject
                }, JsonRequestBehavior.AllowGet);

            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
                return Json(new { data = "Exception Occured while Reading text" }, JsonRequestBehavior.AllowGet);
            }

            return null;
        }
    }
}