package com.infobasic.Models.Dao;
import java.util.List;

import com.infobasic.Models.SoftwarePackage;


public interface SoftwarePackageDao {
    
    public void createSoftware(SoftwarePackage softwarePackage); 

    public List<SoftwarePackage> getAllSoftware();

    public SoftwarePackage getSoftwareByID(int id); 

    public void deleteSoftwareById (int id); 

    public void updateSoftware(SoftwarePackage softwarePackage); 
}