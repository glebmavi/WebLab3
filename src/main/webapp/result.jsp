<%@ page contentType="text/html;charset=UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<fmt:setLocale value="${sessionScope.sessionLocale}"/>
<fmt:setBundle basename="i18n.messages"/>
<!DOCTYPE html>
<html lang="${sessionScope.sessionLocale}">
<head>
    <title>Result</title>
    <meta charset="UTF-8">
    <link rel="icon" type="image/x-icon" href="assets/graph.svg">
    <link rel="stylesheet" href="styles.css">
    <script src="dist/resultBundle.js"></script>
</head>
<body>

<div id="hat">
    <jsp:include page="assets/theme.jsp"/>
    <jsp:include page="assets/locales.jsp"/>
</div>

<table>
    <tr>
        <td>
            <h1>
                <fmt:message key="index.myName"/> P3224 <fmt:message key="index.variant"/> 24923
            </h1>
        </td>
    </tr>
    <tr>
        <td>
            <jsp:include page="assets/graph.svg"/>
        </td>
    </tr>

    <tr>
        <td>
            <table id="resultTable" class="tableWithBorder">
                <thead>
                <tr>
                    <th>X</th>
                    <th>Y</th>
                    <th>R</th>
                    <th><fmt:message key="index.resultTable.hit"/></th>
                    <th><fmt:message key="index.resultTable.time"/></th>
                    <th><fmt:message key="index.resultTable.executionTime"/></th>
                </tr>
                </thead>
                <jsp:useBean id="currentHitHistory"
                             scope="session"
                             class="co.glebmavi.webproglab3.beans.HitHistory"
                />
                <tbody>
                <c:forEach var="hit" items="${currentHitHistory.getHitList()}">
                    <tr>
                        <td class="xTableData">${hit.getX()}</td>
                        <td class="yTableData">${hit.getY()}</td>
                        <td class="rTableData">${hit.getR()}</td>
                        <td class="isHitTableData">${hit.isHit()}</td>
                        <td class="dateTableData">${hit.getCurrentDate()}</td>
                        <td class="execTimeTableData">${hit.getExecutionTime()} ms</td>

                    </tr>
                </c:forEach>
                </tbody>

            </table>
        </td>
    </tr>

    <tr>
        <td>

            <a href="${pageContext.request.contextPath}/">
                <button id="backButton"><fmt:message key="result.back"/></button>
            </a>
        </td>
    </tr>


</table>

</body>
</html>
