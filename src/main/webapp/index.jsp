<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<fmt:setLocale value="${sessionScope.sessionLocale}"/>
<fmt:setBundle basename="i18n.messages"/>
<%
  String[] checkboxValues = {"-4", "-3", "-2", "-1", "0", "1", "2", "3", "4"};
  String[] selectValues = {"1", "1.5", "2", "2.5", "3"};
%>

<!DOCTYPE html>
<html lang="${sessionScope.sessionLocale}">
<head>
  <meta charset="UTF-8">
  <title>Lab2</title>
  <link rel="icon" type="image/x-icon" href="assets/graph.svg">
  <link rel="stylesheet" href="styles.css">
  <script src="dist/indexBundle.js"></script>
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
      <div id="svgX">X=</div>
      <div id="svgY">Y=</div>
    </td>
  </tr>

  <tr>
    <td>
      <form action="" method="post" id="form">
        <table id="formTable">
          <tr>
            <td class="valueMarker" id="xValue">X=</td>
            <td class="formRow">
              <%
              for (String value : checkboxValues) {
              %>
              <label><%=value%><input type="checkbox" class='Xselection' value="<%=value%>" name="X"></label>
              <%
                }
              %>

            </td>
            <td class="leftColumn"></td>
          </tr>

          <tr>
            <td class="valueMarker" id="yValue">Y=</td>
            <td class="formRow">
              <label for="YText"></label> <input type="text" id='YText' name="Y">
              <p id="YMessage">
                <fmt:message key="index.yMessage.default">
                  <fmt:param value="-5"/>
                  <fmt:param value="3" />
                </fmt:message>
              </p>
            </td>
            <td class="leftColumn"></td>
          </tr>

          <tr>
            <td class="valueMarker" id="rValue">R=</td>
            <td class="formRow">
              <label for="RSelect"></label>
              <select name="R" id="RSelect">
                  <option value="" disabled selected hidden><fmt:message key="index.selectR"/></option>
                <%
                for (String value : selectValues) {
                %>
                <option value="<%=value%>" class='Rselection'><%=value%></option>
                <%
                  }
                %>
            </td>
            <td class="leftColumn"></td>
          </tr>

        </table>

        <button type="submit" id="submitButton"><fmt:message key="index.send"/></button>
      </form>
    </td>
  </tr>

  <tr>
    <td>
      <button id="resetTable" ><fmt:message key="index.reset"/></button>
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
        <tbody>
        <jsp:useBean id="hitHistory"
                     scope="session"
                     class="co.glebmavi.webproglab3.beans.HitHistory"
        />
        <c:forEach var="hit" items="${hitHistory.getHitList()}">
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


</table>

</body>
</html>