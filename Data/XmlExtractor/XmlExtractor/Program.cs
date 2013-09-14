using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace XmlExtractor
{
    class Program
    {
        static void Main(string[] args)
        {
            var doc = XDocument.Load(@".\..\..\..\..\AllCounties.xml");
            var output = new XDocument(new XElement("Document"));
            var placemarks = doc.Descendants("Placemark").Where(x => x.Element("description").Value.Contains("State = Mississippi"));
            output.Element("Document").Add(placemarks);

            

            output.Save(@".\..\..\..\..\ExtractedState.xml");
            
        }
    }
}
