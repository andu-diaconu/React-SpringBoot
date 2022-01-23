package com.example.carselling.DAO;

import com.example.carselling.Model.Deal;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository("accessDeals")
public interface DealsDAO extends JpaRepository<Deal, Long> {
    @Query("select new Deal(d.price, d.cc, d.year, d.hp, d.fuel) from Deal d where (d.price <= :price or :price = 0) and (d.cc = :cc or :cc = 0) and (d.year <= :year or :year = 0) and (d.hp = :hp or :hp = 0) and (d.fuel = :fuel or :fuel = '0')")
    List<Object[]> findByCriteria(@Param("price") float price, @Param("cc") float cc,@Param("year") int year,@Param("hp") int hp,@Param("fuel") String fuel);

}