import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export function useDashboardData() {
  const [organizations, setOrganizations] = useState([]);
  const [requests, setRequests] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [complianceRules, setComplianceRules] = useState([]);
  const [complianceScores, setComplianceScores] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchDashboardData() {
      try {
        setLoading(true);

        const [
          organizationsResponse,
          requestsResponse,
          languagesResponse,
          rulesResponse,
          scoresResponse,
          complaintsResponse,
        ] = await Promise.all([
          supabase.from("organizations").select("*"),
          supabase.from("interpreter_requests").select("*"),
          supabase.from("languages").select("*"),
          supabase.from("compliance_rules").select("*"),
          supabase.from("compliance_scores").select("*"),
          supabase.from("complaints").select("*"),
        ]);

        console.log("Organizations Response:", organizationsResponse);
        console.log("Organizations Data:", organizationsResponse.data);
        console.log("Organizations Error:", organizationsResponse.error);

        console.log("Requests:", requestsResponse.data);
        console.log("Languages:", languagesResponse.data);
        console.log("Compliance Rules:", rulesResponse.data);
        console.log("Compliance Scores:", scoresResponse.data);
        console.log("Complaints:", complaintsResponse.data);

        if (organizationsResponse.error) throw organizationsResponse.error;
        if (requestsResponse.error) throw requestsResponse.error;
        if (languagesResponse.error) throw languagesResponse.error;
        if (rulesResponse.error) throw rulesResponse.error;
        if (scoresResponse.error) throw scoresResponse.error;
        if (complaintsResponse.error) throw complaintsResponse.error;

        setOrganizations(organizationsResponse.data || []);
        setRequests(requestsResponse.data || []);
        setLanguages(languagesResponse.data || []);
        setComplianceRules(rulesResponse.data || []);
        setComplianceScores(scoresResponse.data || []);
        setComplaints(complaintsResponse.data || []);
      } catch (err) {
        console.error("Dashboard loading error:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, []);

  return {
    organizations,
    requests,
    languages,
    complianceRules,
    complianceScores,
    complaints,
    loading,
    error,
  };
}