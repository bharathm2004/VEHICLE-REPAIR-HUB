package com.example.demo.service;

import java.util.List;

import com.example.demo.dto.request.SiteRequest;
import com.example.demo.dto.response.SiteResponse;

public interface WebService {

    List<SiteResponse> getSiteData();

    String addSiteData(SiteRequest siteRequest);

    SiteResponse updateSiteData(SiteRequest siteRequest, Long id);

}
