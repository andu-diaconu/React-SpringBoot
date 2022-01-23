package com.example.carselling.Controller;


import com.example.carselling.DAO.DealsDAO;
import com.example.carselling.Model.Deal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/car-sell")
@RestController
public class DealController {

    @Autowired
    private final DealsDAO dealsDAO;

    public DealController(@Qualifier("accessDeals") DealsDAO dealsDAO) {
        this.dealsDAO = dealsDAO;
    }

    @GetMapping("/deals")
    public List<Deal> getDeals(){
       return dealsDAO.findAll();
    }

    @PostMapping("/addDeal")
    public Deal addDeal(@RequestBody Deal deal) {return dealsDAO.save(deal);}

    /* 0 - hold
        1 - activ
        2 - vandut
        3 - sters
    * */
    @PutMapping("/updateDeal/{id}/{posted}")
    public ResponseEntity<Deal> updateDeal(@PathVariable Long id, @PathVariable int posted){
        Deal deal = dealsDAO.findById(id).orElseThrow();
        deal.setPosted(posted);

        Deal dealUpdated = dealsDAO.save(deal);
        return ResponseEntity.ok(dealUpdated);

    }

    @PutMapping("/updateBuyer/{id}/{buyId}")
    public ResponseEntity<Deal> updateBuyer(@PathVariable Long id, @PathVariable Long buyId){
        Deal deal = dealsDAO.findById(id).orElseThrow();
        deal.setBuyId(buyId);

        Deal dealUpdated = dealsDAO.save(deal);
        return ResponseEntity.ok(dealUpdated);
    }

    @GetMapping("/searchDeals/{price}/{cc}/{year}/{hp}/{fuel}")
    public List<Object[]> findByCriteria(@PathVariable("price")float price, @PathVariable("cc") float cc, @PathVariable("year") int year, @PathVariable("hp") int hp, @PathVariable("fuel") String fuel){
        return dealsDAO.findByCriteria(price, cc, year, hp, fuel);
    }
}
