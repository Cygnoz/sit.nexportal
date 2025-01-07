const Area = require('../database/model/area');
const Region = require('../database/model/region')
const Supervisor = require("../database/model/supervisor");
const SupportAgent = require("../database/model/supportAgent");
const AreaManager = require("../database/model/areaManager");
const RegionManager = require("../database/model/regionManager");
const Bda = require("../database/model/bda");
const User = require('../database/model/user');
const Leads = require("../database/model/leads")




exports.getDocumentCounts = async (req, res) => {
    try {
      // Fetch counts for all collections in parallel
      const [
        totalArea,
        totalRegion,
        totalSupervisors,
        totalSupportAgents,
        totalAreaManagers,
        totalRegionManagers,
        totalBdas,
        totalUsers,
        totalTrial,
        totalLead,
        totalLicensor
      ] = await Promise.all([
        Area.countDocuments(),
        Region.countDocuments(),
        Supervisor.countDocuments(),
        SupportAgent.countDocuments(),
        AreaManager.countDocuments(),
        RegionManager.countDocuments(),
        Bda.countDocuments(),
        User.countDocuments(),
        Leads.countDocuments({ customerStatus: "Trial" }),
        Leads.countDocuments({ customerStatus: "Lead" }),
        Leads.countDocuments({ customerStatus: "Licenser" })
      ]);
  
      // Send response
      res.status(200).json({
        totalArea,
        totalRegion,
        totalSupervisors,
        totalSupportAgents,
        totalAreaManagers,
        totalRegionManagers,
        totalBdas,
        totalUsers,
        totalTrial,
        totalLead,
        totalLicensor
      });
    } catch (error) {
      console.error("Error fetching document counts:", error);
      res.status(500).json({ message: "Internal server error" });
    }
  };

  exports.getTeamCounts = async (req, res) => {
    try {
      const { id } = req.params;
  
      let filter = id ? { region: id } : {};
  
      // Count documents based on the filter (with or without region filter)
      const [regionManager, areaManager, bda, supervisor, supportAgent] = await Promise.all([
        RegionManager.countDocuments(filter),
        AreaManager.countDocuments(filter),
        Bda.countDocuments(filter),
        Supervisor.countDocuments(filter),
        SupportAgent.countDocuments(filter),
      ]);
  
      const totalTeam = regionManager + areaManager + bda + supervisor + supportAgent;
  
      // Send response
      res.json({
        regionId: id || "All Regions",
        regionManager,
        areaManager,
        bda,
        supervisor,
        supportAgent,
        totalTeam,
      });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };