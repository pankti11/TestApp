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
            return Json(new { Name = text }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ReadFile(string path)
        {
            string _filePath = @path;
            try
            {
                string[] lines = System.IO.File.ReadAllLines(_filePath);
                var _content = lines.ToList();
                var jsonSerializer = new JavaScriptSerializer();
                var jsonObject = jsonSerializer.Serialize(_content);
                return Json(new { data = jsonObject }, JsonRequestBehavior.AllowGet);

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