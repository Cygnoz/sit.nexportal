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
        totalLicensor,
        activeLicensor
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
        Leads.countDocuments({ customerStatus: "Licenser" }),
        Leads.countDocuments({ customerStatus: "Licenser",licensorStatus:"Active" })
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
        totalLicensor,
        activeLicensor
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


exports.getLeadConversionRate = async (req, res) => {
  try {
    const { id } = req.params;

    // Step 1: Fetch areas under the given region ID
    const areas = await Area.find({ region: id });

    // Step 2: Calculate total and converted leads for each area
    const areasWithConversionRate = await Promise.all(
      areas.map(async (area) => {
        const areaId = area._id;

        // Total leads in this area
        const totalLeads = await Leads.countDocuments({ areaId });

        // Converted leads in this area (where customerStatus is not "Lead")
        const convertedLeads = await Leads.countDocuments({
          areaId,
          customerStatus: { $ne: 'Lead' },
        });

        // Calculate conversion rate
        const conversionRate = totalLeads > 0
          ? ((convertedLeads / totalLeads) * 100).toFixed(2)
          : 0;

        // Return the area details with conversion rate
        return {
          id: areaId,
          areaName: area.areaName,
          conversionRate: `${conversionRate}%`,
        };
      })
    );

    // Step 3: Calculate total and converted leads for the entire region
    const totalRegionLeads = await Leads.countDocuments({ regionId: id });
    const convertedRegionLeads = await Leads.countDocuments({
      regionId: id,
      customerStatus: { $ne: 'Lead' },
    });

    // Step 4: Calculate the overall region conversion rate
    const regionConversionRate = totalRegionLeads > 0
      ? ((convertedRegionLeads / totalRegionLeads) * 100).toFixed(2)
      : 0;

    // Step 5: Send the response
    res.json({
      regionId: id,
      regionConversionRate: `${regionConversionRate}%`,
      areas: areasWithConversionRate,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
