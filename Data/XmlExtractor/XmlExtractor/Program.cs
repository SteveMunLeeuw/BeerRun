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
            var state = "Connecticut";
            var doc = XDocument.Load(@".\..\..\..\..\AllCounties.xml");
            var output = new XDocument(new XElement("Document"));
            var placemarks = doc.Descendants("Placemark").Where(x => x.Element("description").Value.Contains(string.Format("State = {0}", state)));
            output.Element("Document").Add(placemarks);

            

            output.Save(string.Format(@".\..\..\..\..\{0}.xml", state));
            
        }
    }
}
