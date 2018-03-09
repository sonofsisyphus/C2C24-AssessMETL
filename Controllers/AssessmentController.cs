using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace AssessMETL.Controllers
{
    [Produces("application/json")]
    [Route("api/[controller]")]
    public class AssessmentController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<CapabilityAssessment> CapabilityAssessments()
        {
            IEnumerable<CapabilityAssessment> assessments = null;
            HttpResponseMessage response = await client.GetAsync(assessmentsvc/api/capabilityAssessments);
            if (response.IsSuccessStatusCode)
            {
                assessments = await response.Content.ReadAsAsync<CapabilityAssessment>();
            }
            return assessments;
         }
        [HttpGet("[action]")]
        public IEnumerable<Sorts> Sorts()
        {
            IEnumerable<Sorts> sortsassessments = null;
            HttpResponseMessage response = await client.GetAsync(assessmentsvc/api/Sorts);
            if (response.IsSuccessStatusCode)
            {
                sortsassessments = await response.Content.ReadAsAsync<Sorts>();
            }
            return sortsassessments;

        }
        [HttpGet("[action]")]
        public IEnumerable<Unit> Units()
        {
            IEnumerable<Unit> units = null;
            HttpResponseMessage response = await client.GetAsync(assessmentsvc/api/Units);
            if (response.IsSuccessStatusCode)
            {
                units = await response.Content.ReadAsAsync<Unit>();
            }
            return units;

        }

    }
    
    public class CapabilityAssessment
    {
        public Guid CapabilityAssessmentId { get; set; }
        public string Description { get; set; }
        public string Abbreviation { get; set; }
        public string Name { get; set; }
        public string Status { get; set; }
        public DateTime Assessed { get; set; }
        public string Achieved { get; set; }
        public string Current { get; set; }
        public string Next { get; set; }
        public int Personnel { get; set; }
        public int Equipment { get; set; }
        public int Supply { get; set; }
        public int Training { get; set; }
        public int Ordnance { get; set; }
        public int Overall { get; set; }

        public List<METAssessment> METAssessments { get; set; } 
    }
    public class Sorts
    {
        public int Personnel { get; set; }
        public int Equipment { get; set; }
        public int Supply { get; set; }
        public int Training { get; set; }
        public int Ordnance { get; set; }
        public int Overall { get; set; }
        public string Category { get; set; }
        public string Code { get; set; }
        public string Status { get; set; }
        public string Organization { get; set; }
        public string Embarked { get; set; }
        public int Effectivity { get; set; }
        public int Level { get; set; }
        public int Limitation { get; set; }
        public string ADCON { get; set; }
        public string OPCON { get; set; }
        public string Latitude { get; set; }
        public string Longitude { get; set; }
        public string CBRCurrent { get; set; }
        public string CBRProjected { get; set; }
        public string CBRTraining { get; set; }

    }
    public class Unit
    {
        public string Uic { get; set; }
        public string Name { get; set; }

    }
}