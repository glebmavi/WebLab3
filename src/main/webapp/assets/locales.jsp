<%@ page import="java.util.Map" %>
<%@ page import="java.util.HashMap" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<fmt:setLocale value="${param.lang}"/>
<fmt:setBundle basename="i18n.messages"/>

<%
    Map<String, String> availableLocales = new HashMap<>();
    availableLocales.put("en", "English \uD83C\uDDEC\uD83C\uDDE7");
    availableLocales.put("ru", "Русский \uD83C\uDDF7\uD83C\uDDFA");
    availableLocales.put("es", "Español \uD83C\uDDEA\uD83C\uDDF8");
%>
<div id="localeDiv" class="hatDivElement">
    <button id="toggleLocale">
        <img src="language-light.svg" alt="SVG Image">
    </button>

    <div id="localeSelect">
        <%
            for (String locale : availableLocales.keySet()) {
        %>
        <div class="localeOption" id="<%=locale%>"><%=availableLocales.get(locale)%></div>
        <%
            }
        %>
    </div>
</div>

