package com.infobasic.Models.Dao.Impl;

import com.infobasic.Models.SoftwarePackage;
import com.infobasic.Models.Dao.SoftwarePackageDao;
import com.infobasic.Persistence.ConnectionManager;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class SoftwarePackageDaoImpl implements SoftwarePackageDao {

    List<SoftwarePackage> software;

    @Override
    public void createSoftware(SoftwarePackage softwarePackage) {
        Connection connection = ConnectionManager.getConnetion();
        Statement statement;
        try {
            String query = String.format("insert into public.software_package values('%s','%s','%s','%s');",
                    softwarePackage.getProduct_code(), softwarePackage.getDescription(), softwarePackage.getName(),
                    softwarePackage.getCategory());
            statement = connection.createStatement();
            statement.executeUpdate(query);

        } catch (SQLException e) {
            e.printStackTrace();
        }

    }

    @Override
    public List<SoftwarePackage> getAllSoftware() {

        this.software = new ArrayList<SoftwarePackage>();
        Connection connection = ConnectionManager.getConnetion();
        Statement statement;
        ResultSet resultSet = null;
        try {

            String query = "select * from public.software_package";
            statement = connection.createStatement();
            resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String description = resultSet.getString("description");
                String category = resultSet.getString("category");
                String product_code = resultSet.getString("product_code");
                SoftwarePackage s = new SoftwarePackage(id, name, description, category, product_code);
                software.add(s);
            }

        } catch (SQLException e) {
            e.printStackTrace();
        }
        return software;

    }

    @Override
    public SoftwarePackage getSoftwareByID(int idSearch) {
        Connection connection = ConnectionManager.getConnetion();
        Statement statement;
        ResultSet resultSet = null;
        SoftwarePackage softwarePackage = null;
        try {
            String query = String.format("select * from public.software_package where id= %s", idSearch);
            statement = connection.createStatement();
            resultSet = statement.executeQuery(query);
            while (resultSet.next()) {
                int id = resultSet.getInt("id");
                String name = resultSet.getString("name");
                String description = resultSet.getString("description");
                String category = resultSet.getString("category");
                String product_code = resultSet.getString("product_code");
                softwarePackage = new SoftwarePackage(id, name, description, category, product_code);
            }
        } catch (SQLException e) {

            e.printStackTrace();
        }
        return softwarePackage;
    }

    @Override
    public void deleteSoftwareById(int id) {
        Connection connection = ConnectionManager.getConnetion();
        Statement statement;
        try {
            String query = String.format("delete from public.software_package where id= %s", id);
            statement = connection.createStatement();
            statement.executeUpdate(query);
            System.out.println("Data Deleted");
        } catch (Exception e) {
            System.out.println(e);
        }

    }

    @Override
    public void updateSoftware(SoftwarePackage softwarePackage) {
        Connection connection = ConnectionManager.getConnetion();
        Statement statement;
        try {
            String query = String.format("update public.software_package set product_code='%s', description='%s', name='%s', category='%s' where id='%s'", softwarePackage.getProduct_code(), softwarePackage.getDescription(), softwarePackage.getName(),softwarePackage.getCategory(),softwarePackage.getId());
            System.out.println(query);
            statement = connection.createStatement();
            statement.executeUpdate(query);

        } catch (Exception e) {
            System.out.println(e);
        }

    }

}
