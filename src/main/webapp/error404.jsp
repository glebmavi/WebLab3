<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="custom" uri="/WebProgLab2/tags" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<fmt:setLocale value="${param.sessionLocale}"/>
<fmt:setBundle basename="i18n.messages"/>
<!DOCTYPE html>
<html lang="${param.sessionLocale}">
<head>
    <meta charset="UTF-8">
    <title>404 Not found</title>
    <link rel="icon" type="image/x-icon" href="assets/graph.svg">
    <link rel="stylesheet" href="styles.css">
    <script src="dist/404bundle.js"></script>
</head>
<body>

<div id="hat">
    <jsp:include page="assets/theme.jsp"/>
    <jsp:include page="assets/locales.jsp"/>
</div>

<main id="main404">
    <h1>
        <fmt:message key="error404.notFound"/> - 404
    </h1>
    <img src="https://http.cat/images/404.jpg" alt="404 Not Found Cat">

    <div>
        <custom:wordCount word="JSP" imgPath="assets/relevantMeme.jpg" phrase="Я люблю JSP!<br>">
            dsnvivbfjkjasoisbfvisjewfbgfjosidew jfjsp JSP a sdas da sd asd asda JSP JSP JSP AAAAAAAAAAAAAA
        </custom:wordCount>
    </div>

    <div>
        <a href="${pageContext.request.contextPath}/">
            <button id="backButton"><fmt:message key="result.back"/></button>
        </a>
    </div>
</main>

</body>
</html>
