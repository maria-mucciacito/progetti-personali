package com.infobasic.Controllers;

import com.google.gson.Gson;
import com.infobasic.Services.DashboardService;
import static spark.Spark.*;

public class DashboardController {
    Gson gson;
    DashboardService dashboardService;

    public DashboardController(DashboardService dashboardService) {
        this.gson = new Gson();
        this.dashboardService = new DashboardService();
    }

    public void startServices() {
        options("/*",
                (request, response) -> {

                    String accessControlRequestHeaders = request
                            .headers("Access-Control-Request-Headers");
                    if (accessControlRequestHeaders != null) {
                        response.header("Access-Control-Allow-Headers",
                                accessControlRequestHeaders);
                    }

                    String accessControlRequestMethod = request
                            .headers("Access-Control-Request-Method");
                    if (accessControlRequestMethod != null) {
                        response.header("Access-Control-Allow-Methods",
                                accessControlRequestMethod);
                    }

                    return "OK";
                });

        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));

        // read number of leads group by source
        get("/leadbysource", (req, res) -> {
            res.type("application/json");
            return dashboardService.leadsBySource();
        }, gson::toJson);

        // read number of deals group by state
        get("/dealbystate", (req, res) -> {
            res.type("application/json");
            return dashboardService.dealsByState();
        }, gson::toJson);

        // read numer of tasks group by state
        get("/taskbystate", (req, res) -> {
            res.type("application/json");
            return dashboardService.tasksByState();
        }, gson::toJson);

        // read number of tasks group by month
        get("/taskformonth", (req, res) -> {
            res.type("application/json");
            return dashboardService.tasksForMonth();
        }, gson::toJson);

    }

}
