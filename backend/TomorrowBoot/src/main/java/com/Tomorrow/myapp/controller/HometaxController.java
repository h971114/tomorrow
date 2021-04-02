package com.Tomorrow.myapp.controller;

import java.io.IOException;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.jsoup.Connection.Method;
import org.jsoup.Connection.Response;
import org.jsoup.Jsoup;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "https://j4a305.p.ssafy.io"})
@RequestMapping("/hometax")
public class HometaxController {
    private final static Logger logger = LoggerFactory.getLogger(HometaxController.class);

    public HometaxController() {
    }
//	public static void main(String[] args) {
//		getTaxTypeFromNts("8996300123");
//	}
    /** * 국세청 홈텍스에서 사업자과세유형을 조회하여 반환. *@param listBusinessRegNo * @return */
//	public List<Map<String, String>> selectTaxTypeFromNts(List<String> listBusinessRegNo) { 
//		List<Map<String, String>> list = new ArrayList<>();
//		for (String businessRegNo : listBusinessRegNo) { list.add(getTaxTypeFromNts(businessRegNo)); }
//		return list; } 

    /**
     * 국세청 홈텍스에서 사업자과세유형을 조회하여 반환. * @param businessRegNo * @return
     */

    @GetMapping("/{number}")
    public String getTaxTypeFromNts(@PathVariable(value = "number") String businessRegNo, HttpServletRequest req) {
        System.out.println(businessRegNo);
        String result = "";
        if (null == businessRegNo || "".equals(businessRegNo)) {
            throw new RuntimeException("조회할 사업자등록번호를 입력해주세요.");
        }
        String txprDscmNo = StringUtils.replace(businessRegNo, "-", "");
        if (txprDscmNo.length() != 10) {
            throw new RuntimeException("조회할 사업자등록번호를 올바로 입력해주세요.");
        }
        String dongCode = txprDscmNo.substring(3, 5);
        String url = "https://teht.hometax.go.kr/wqAction.do?actionId=ATTABZAA001R08&screenId=UTEABAAA13&popupYn=false&realScreenId=";
        Map<String, String> headers = new HashMap<>();
        headers.put("Accept", "application/xml; charset=UTF-8");
        headers.put("Accept-Encoding", "gzip, deflate, br");
        headers.put("Accept-Language", "ko-KR,ko;q=0.9,en-US;q=0.8,en;q=0.7");
        headers.put("Connection", "keep-alive");
        headers.put("Content-Length", "257");
        headers.put("Content-Type", "application/xml; charset=UTF-8");
        headers.put("Host", "teht.hometax.go.kr");
        headers.put("Origin", "https://teht.hometax.go.kr");
        headers.put("Referer", "https://teht.hometax.go.kr/websquare/websquare.html?w2xPath=/ui/ab/a/a/UTEABAAA13.xml");
        headers.put("Sec-Fetch-Mode", "cors");
        headers.put("Sec-Fetch-Site", "same-origin");
        headers.put("User-Agent", "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.130 Safari/537.36");
        final String CRLF = "\n";
        StringBuffer sb = new StringBuffer();
        sb.append("<map id=\"ATTABZAA001R08\">" + CRLF);
        sb.append(" <pubcUserNo/>" + CRLF);
        sb.append(" <mobYn>N</mobYn>" + CRLF);
        sb.append(" <inqrTrgtClCd>1</inqrTrgtClCd>" + CRLF);
        sb.append(" <txprDscmNo>" + txprDscmNo + "</txprDscmNo>" + CRLF);
        System.out.println(txprDscmNo);
        sb.append(" <dongCode>" + dongCode + "</dongCode>" + CRLF);
        sb.append(" <psbSearch>Y</psbSearch>" + CRLF);
        sb.append(" <map id=\"userReqInfoVO\"/>" + CRLF);
        sb.append("</map>" + CRLF);
        String body = sb.toString();
        Map<String, String> map = new HashMap<>();
        try {
            Response res = Jsoup.connect(url).headers(headers).requestBody(body).timeout(3000).method(Method.POST).execute();
            if (logger.isDebugEnabled()) {
                logger.debug(res.body());
            }
            org.dom4j.Document document = DocumentHelper.parseText(res.body());
            String trtCntn = nvl(document.valueOf("//map/trtCntn"), "");
            System.out.println(trtCntn);
            result = trtCntn;
            if (logger.isDebugEnabled()) {
                logger.debug("trtCntn[" + trtCntn + "]");
            }
            map.put(businessRegNo, trtCntn);
        } catch (IOException e) {
            logger.error("Jsoup 오류", e);
        } catch (DocumentException e) {
            logger.error("Document parse 오류", e);
        }
        return result;
    }

    public static String nvl(String str, String defaultStr) {
        return (str == null ? defaultStr : str);
    }

}
