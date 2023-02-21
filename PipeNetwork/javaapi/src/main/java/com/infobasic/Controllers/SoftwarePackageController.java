package com.infobasic.Controllers;

import com.infobasic.Models.SoftwarePackage;
import com.infobasic.Services.SoftwarePackageService;
import com.google.gson.Gson;
import static spark.Spark.*;

public class SoftwarePackageController {
    Gson gson;
    SoftwarePackageService softwarePackageService;

    public SoftwarePackageController(SoftwarePackageService softwareService) {
        this.gson = new Gson();
        this.softwarePackageService = softwareService;
    }

    public void startServices(){

        //get all software
        get("/softwarepackage", (req, res) -> {
            res.type("application/json");
            return softwarePackageService.getAllSoftware();
        }, gson::toJson);

        //get software by id
        get("/softwarepackage/:id", (req, res) -> {
            res.type("application/json");
            int idSearch = Integer.parseInt(req.params("id")); 
            return softwarePackageService.getSoftwareById(idSearch);
        }, gson::toJson);

        //create new software
        post("/softwarepackage", (req, res) -> {
            res.type("application/json");
            SoftwarePackage softwarePackageFromRequest = new Gson().fromJson(req.body(), SoftwarePackage.class);
            softwarePackageService.createSoftware(softwarePackageFromRequest);
            return softwarePackageFromRequest;
        }, gson::toJson);

        //delete software by id
        delete("/softwarepackage/:id", (req,res)->{
            res.type("application/json");
            int id = Integer.parseInt(req.params("id")); 
            softwarePackageService.deleteSoftwareById(id);
            return null;
        }, gson::toJson);

        //update software by id
        put("/softwarepackage/:id", (req,res)->{
            res.type("application/json");
            int id = Integer.parseInt(req.params("id")); 
            SoftwarePackage softwarePackageFromRequest = new Gson().fromJson(req.body(), SoftwarePackage.class);
            softwarePackageService.updateSoftware(softwarePackageFromRequest, id);
            return softwarePackageFromRequest;
        },gson::toJson);
    }
    
}
