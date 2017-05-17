using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.IO;

namespace TestApp.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            return View();
        }

        public ActionResult GetData() {
           string text = "Hello";
            return Json(new { Name = text }, JsonRequestBehavior.AllowGet);
        }

        public ActionResult ReadFile(string path) {
            string _filePath = path;
            try
            {
                string[] lines = System.IO.File.ReadAllLines(_filePath);
                var _content = lines.ToList();
            }
            catch (Exception ex) {
                Console.WriteLine(ex.InnerException);
                return Json(new { text = "Exception Occured while Reading text" });
            }

            return null;
        }
    }
}