 function submitForm() {
    var grade = document.getElementById("grade").value;
    var classNum = document.getElementById("class").value;

    var url = "";

    if (grade === "2") {
        switch (classNum) {
            case "1":
                var newWindow = window.open();
                newWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>2학년 1반 시간표</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: whitesmoke;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 800px;
            box-sizing: border-box;
            overflow-x: auto;
        }
        h1 {
            font-size: 24px;
        }
        button {
            font-size: 16px;
            margin: 10px;
            padding: 10px 20px;
        }
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            display: flex; /* 추가 */
            justify-content: center; /* 테이블을 가운데로 정렬 */
        }
        table {
            border-collapse: collapse;
            width: 100%;
            max-width: 800px; /* 테이블 크기 제한 */
            margin: 20px 0;
            border: 1px solid pink;
            border-width: 2px;
        }
        th, td {
            border: 1px solid pink;
            padding: 8px;
            text-align: center;
            font-size: 0.9em;
            border-width: 2px;
        }
        th {
            background-color: #f2f2f2;
        }
        @media (max-width: 600px) {
            th, td {
                font-size: 0.8em;
                padding: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>2학년 1반에 온것을 환영합니다 '익명의 여행자'님!</h1>
        <h1>2학년 1반의 시간표 입니다</h1>
        <div class="table-wrapper">
            <table>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">월요일</th>
                    <th scope="col">화요일</th>
                    <th scope="col">수요일</th>
                    <th scope="col">목요일</th>
                    <th scope="col">금요일</th>
                </tr>
                <tr>
                    <td>1교시</td>
                    <td>공강</td>
                    <td>문학</td>
                    <td>A</td>
                    <td>D</td>
                    <td>경제 수학</td>
                </tr>
                <tr>
                    <td>2교시</td>
                    <td>영어II</td>
                    <td>A</td>
                    <td>문학</td>
                    <td>영어II</td>
                    <td>한국사</td>
                </tr>
                <tr>
                    <td>3교시</td>
                    <td>문학</td>
                    <td>영어II</td>
                    <td>경제 수학</td>
                    <td>경제 수학</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>4교시</td>
                    <td>C</td>
                    <td>체육</td>
                    <td>D</td>
                    <td>A</td>
                    <td>음악</td>
                </tr>
                <tr>
                    <td>5교시</td>
                    <td>진로</td>
                    <td>C</td>
                    <td>한국사</td>
                    <td>체육</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>6교시</td>
                    <td>D</td>
                    <td>B</td>
                    <td>창체</td>
                    <td>공강</td>
                    <td>공강</td>
                </tr>
                <tr>
                    <td>7교시</td>
                    <td>B</td>
                    <td>미술</td>
                    <td>창체</td>
                    <td>문학</td>
                    <td>영어II</td>
                </tr>
            </table>
        </div>
        
    </div>
</body>
</html>`);
                newWindow.document.close();
                return; // Prevent further execution of the original redirection

                break;
            case "2":
                var newWindow = window.open();
                newWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>2학년 2반 시간표</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: whitesmoke;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 800px;
            box-sizing: border-box;
            overflow-x: auto;
        }
        h1 {
            font-size: 24px;
        }
        button {
            font-size: 16px;
            margin: 10px;
            padding: 10px 20px;
        }
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            display: flex; /* 추가 */
            justify-content: center; /* 테이블을 가운데로 정렬 */
        }
        table {
            border-collapse: collapse;
            width: 100%;
            max-width: 800px; /* 테이블 크기 제한 */
            margin: 20px 0;
            border: 1px solid pink;
            border-width: 2px;
        }
        th, td {
            border: 1px solid pink;
            padding: 8px;
            text-align: center;
            font-size: 0.9em;
            border-width: 2px;
        }
        th {
            background-color: #f2f2f2;
        }
        @media (max-width: 600px) {
            th, td {
                font-size: 0.8em;
                padding: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>2학년 2반에 온것을 환영합니다 '익명의 여행자'님!</h1>
        <h1>2학년 2반의 시간표 입니다</h1>
        <div class="table-wrapper">
            <table>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">월요일</th>
                    <th scope="col">화요일</th>
                    <th scope="col">수요일</th>
                    <th scope="col">목요일</th>
                    <th scope="col">금요일</th>
                </tr>
                <tr>
                    <td>1교시</td>
                    <td>공강</td>
                    <td>문학</td>
                    <td>A</td>
                    <td>D</td>
                    <td>문학</td>
                </tr>
                <tr>
                    <td>2교시</td>
                    <td>체육</td>
                    <td>A</td>
                    <td>경제 수학</td>
                    <td>영어II</td>
                    <td>영어II</td>
                </tr>
                <tr>
                    <td>3교시</td>
                    <td>문학</td>
                    <td>미술</td>
                    <td>영어II</td>
                    <td>한국사</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>4교시</td>
                    <td>C</td>
                    <td>경제 수학</td>
                    <td>D</td>
                    <td>A</td>
                    <td>진로</td>
                </tr>
                <tr>
                    <td>5교시</td>
                    <td>영어II</td>
                    <td>C</td>
                    <td>문학</td>
                    <td>경제 수학</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>6교시</td>
                    <td>D</td>
                    <td>B</td>
                    <td>창체</td>
                    <td>공강</td>
                    <td>공강</td>
                </tr>
                <tr>
                    <td>7교시</td>
                    <td>B</td>
                    <td>한국사</td>
                    <td>창체</td>
                    <td>체육</td>
                    <td>음악</td>
                </tr>
            </table>
        </div>
        
    </div>
</body>
</html>`);
            break;
            case "3":
                var newWindow = window.open();
                newWindow.document.write( `<!DOCTYPE html>
<html lang="en">
<head>
    <title>2학년 3반 시간표</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: whitesmoke;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 800px;
            box-sizing: border-box;
            overflow-x: auto;
        }
        h1 {
            font-size: 24px;
        }
        button {
            font-size: 16px;
            margin: 10px;
            padding: 10px 20px;
        }
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            display: flex; /* 추가 */
            justify-content: center; /* 테이블을 가운데로 정렬 */
        }
        table {
            border-collapse: collapse;
            width: 100%;
            max-width: 800px; /* 테이블 크기 제한 */
            margin: 20px 0;
            border: 1px solid pink;
            border-width: 2px;
        }
        th, td {
            border: 1px solid pink;
            padding: 8px;
            text-align: center;
            font-size: 0.9em;
            border-width: 2px;
        }
        th {
            background-color: #f2f2f2;
        }
        @media (max-width: 600px) {
            th, td {
                font-size: 0.8em;
                padding: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>2학년 3반에 온것을 환영합니다 '익명의 여행자'님!</h1>
        <h1>2학년 3반의 시간표 입니다</h1>
        <div class="table-wrapper">
            <table>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">월요일</th>
                    <th scope="col">화요일</th>
                    <th scope="col">수요일</th>
                    <th scope="col">목요일</th>
                    <th scope="col">금요일</th>
                </tr>
                <tr>
                    <td>1교시</td>
                    <td>공강</td>
                    <td>진로</td>
                    <td>A</td>
                    <td>D</td>
                    <td>한국사</td>
                </tr>
                <tr>
                    <td>2교시</td>
                    <td>미술</td>
                    <td>A</td>
                    <td>체육</td>
                    <td>영어II</td>
                    <td>영어II</td>
                </tr>
                <tr>
                    <td>3교시</td>
                    <td>경제 수학</td>
                    <td>영어II</td>
                    <td>한국사</td>
                    <td>체육</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>4교시</td>
                    <td>C</td>
                    <td>문학</td>
                    <td>D</td>
                    <td>A</td>
                    <td>문학</td>
                </tr>
                <tr>
                    <td>5교시</td>
                    <td>영어II</td>
                    <td>C</td>
                    <td>문학</td>
                    <td>음악</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>6교시</td>
                    <td>D</td>
                    <td>B</td>
                    <td>창체</td>
                    <td>공강</td>
                    <td>공강</td>
                </tr>
                <tr>
                    <td>7교시</td>
                    <td>B</td>
                    <td>경제 수학</td>
                    <td>창체</td>
                    <td>문학</td>
                    <td>경제 수학</td>
                </tr>
            </table>
            </tbody></table>
        </div>
            
    </div>
</body>
</html>`);
	        break;
            case "4":
                var newWindow = window.open();
                newWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>2학년 4반 시간표</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: whitesmoke;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 800px;
            box-sizing: border-box;
            overflow-x: auto;
        }
        h1 {
            font-size: 24px;
        }
        button {
            font-size: 16px;
            margin: 10px;
            padding: 10px 20px;
        }
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            display: flex; /* 추가 */
            justify-content: center; /* 테이블을 가운데로 정렬 */
        }
        table {
            border-collapse: collapse;
            width: 100%;
            max-width: 800px; /* 테이블 크기 제한 */
            margin: 20px 0;
            border: 1px solid pink;
            border-width: 2px;
        }
        th, td {
            border: 1px solid pink;
            padding: 8px;
            text-align: center;
            font-size: 0.9em;
            border-width: 2px;
        }
        th {
            background-color: #f2f2f2;
        }
        @media (max-width: 600px) {
            th, td {
                font-size: 0.8em;
                padding: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>2학년 4반에 온것을 환영합니다 '익명의 여행자'님!</h1>
        <h1>2학년 4반의 시간표 입니다</h1>
        <div class="table-wrapper">
            <table>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">월요일</th>
                    <th scope="col">화요일</th>
                    <th scope="col">수요일</th>
                    <th scope="col">목요일</th>
                    <th scope="col">금요일</th>
                </tr>
                <tr>
                    <td>1교시</td>
                    <td>공강</td>
                    <td>영어II</td>
                    <td>A</td>
                    <td>D</td>
                    <td>체육</td>
                </tr>
                <tr>
                    <td>2교시</td>
                    <td>미적분</td>
                    <td>A</td>
                    <td>문학</td>
                    <td>문학</td>
                    <td>음악</td>
                </tr>
                <tr>
                    <td>3교시</td>
                    <td>체육</td>
                    <td>미적분</td>
                    <td>진로</td>
                    <td>영어II</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>4교시</td>
                    <td>C</td>
                    <td>미술</td>
                    <td>D</td>
                    <td>A</td>
                    <td>영어II</td>
                </tr>
                <tr>
                    <td>5교시</td>
                    <td>한국사</td>
                    <td>C</td>
                    <td>영어II</td>
                    <td>미적분</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>6교시</td>
                    <td>D</td>
                    <td>B</td>
                    <td>창체</td>
                    <td>공강</td>
                    <td>공강</td>
                </tr>
                <tr>
                    <td>7교시</td>
                    <td>B</td>
                    <td>문학</td>
                    <td>창체</td>
                    <td>한국사</td>
                    <td>문학</td>
                </tr>
            </table>
            </tbody></table>
        </div>
            
    </div>
</body>
</html>`);
	        break;
            case "5":
                var newWindow = window.open();
                newWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>2학년 5반 시간표</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: whitesmoke;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 800px;
            box-sizing: border-box;
            overflow-x: auto;
        }
        h1 {
            font-size: 24px;
        }
        button {
            font-size: 16px;
            margin: 10px;
            padding: 10px 20px;
        }
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            display: flex; /* 추가 */
            justify-content: center; /* 테이블을 가운데로 정렬 */
        }
        table {
            border-collapse: collapse;
            width: 100%;
            max-width: 800px; /* 테이블 크기 제한 */
            margin: 20px 0;
            border: 1px solid pink;
            border-width: 2px;
        }
        th, td {
            border: 1px solid pink;
            padding: 8px;
            text-align: center;
            font-size: 0.9em;
            border-width: 2px;
        }
        th {
            background-color: #f2f2f2;
        }
        @media (max-width: 600px) {
            th, td {
                font-size: 0.8em;
                padding: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>2학년 5반에 온것을 환영합니다 '익명의 여행자'님!</h1>
        <h1>2학년 5반의 시간표 입니다</h1>
        <div class="table-wrapper">
            <table>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">월요일</th>
                    <th scope="col">화요일</th>
                    <th scope="col">수요일</th>
                    <th scope="col">목요일</th>
                    <th scope="col">금요일</th>
                </tr>
                <tr>
                    <td>1교시</td>
                    <td>공강</td>
                    <td>체육</td>
                    <td>A</td>
                    <td>D</td>
                    <td>미적분</td>
                </tr>
                <tr>
                    <td>2교시</td>
                    <td>영어II</td>
                    <td>A</td>
                    <td>음악</td>
                    <td>체육</td>
                    <td>미술</td>
                </tr>
                <tr>
                    <td>3교시</td>
                    <td>한국사</td>
                    <td>한국사</td>
                    <td>미적분</td>
                    <td>미적분</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>4교시</td>
                    <td>C</td>
                    <td>문학</td>
                    <td>D</td>
                    <td>A</td>
                    <td>영어II</td>
                </tr>
                <tr>
                    <td>5교시</td>
                    <td>문학</td>
                    <td>C</td>
                    <td>영어II</td>
                    <td>문학</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>6교시</td>
                    <td>D</td>
                    <td>B</td>
                    <td>창체</td>
                    <td>공강</td>
                    <td>공강</td>
                </tr>
                <tr>
                    <td>7교시</td>
                    <td>B</td>
                    <td>영어II</td>
                    <td>창체</td>
                    <td>진로</td>
                    <td>문학</td>
                </tr>
            </table>
            </tbody></table>
        </div>
            
    </div>
</body>
</html>`);
	        break;
            case "6":
                var newWindow = window.open();
                newWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>2학년 6반 시간표</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: whitesmoke;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 800px;
            box-sizing: border-box;
            overflow-x: auto;
        }
        h1 {
            font-size: 24px;
        }
        button {
            font-size: 16px;
            margin: 10px;
            padding: 10px 20px;
        }
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            display: flex; /* 추가 */
            justify-content: center; /* 테이블을 가운데로 정렬 */
        }
        table {
            border-collapse: collapse;
            width: 100%;
            max-width: 800px; /* 테이블 크기 제한 */
            margin: 20px 0;
            border: 1px solid pink;
            border-width: 2px;
        }
        th, td {
            border: 1px solid pink;
            padding: 8px;
            text-align: center;
            font-size: 0.9em;
            border-width: 2px;
        }
        th {
            background-color: #f2f2f2;
        }
        @media (max-width: 600px) {
            th, td {
                font-size: 0.8em;
                padding: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>2학년 6반에 온것을 환영합니다 '익명의 여행자'님!</h1>
        <h1>2학년 6반의 시간표 입니다</h1>
        <div class="table-wrapper">
            <table>
                <tbody><tr>
                    <th scope="col"></th>
                    <th scope="col">월요일</th>
                    <th scope="col">화요일</th>
                    <th scope="col">수요일</th>
                    <th scope="col">목요일</th>
                    <th scope="col">금요일</th>
                </tr>
                <tr>
                    <td>1교시</td>
                    <td>공강</td>
                    <td>미적분</td>
                    <td>A</td>
                    <td>D</td>
                    <td>미적분</td>
                </tr>
                <tr>
                    <td>2교시</td>
                    <td>한국사</td>
                    <td>A</td>
                    <td>미술</td>
                    <td>한국사</td>
                    <td>영어II</td>
                </tr>
                <tr>
                    <td>3교시</td>
                    <td>영어II</td>
                    <td>문학</td>
                    <td>영어II</td>
                    <td>문학</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>4교시</td>
                    <td>C</td>
                    <td>음악</td>
                    <td>D</td>
                    <td>A</td>
                    <td>문학</td>
                </tr>
                <tr>
                    <td>5교시</td>
                    <td>문학</td>
                    <td>C</td>
                    <td>진로</td>
                    <td>영어II</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>6교시</td>
                    <td>D</td>
                    <td>B</td>
                    <td>창체</td>
                    <td>공강</td>
                    <td>공강</td>
                </tr>
                <tr>
                    <td>7교시</td>
                    <td>B</td>
                    <td>c체육</td>
                    <td>창체</td>
                    <td>미적분</td>
                    <td>체육</td>
                </tr>
                
            </tbody></table>
        </div>
            
    </div>
</body>
</html>`);
	        break;
            case "7":
                var newWindow = window.open();
                newWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>2학년 7반 시간표</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: whitesmoke;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 800px;
            box-sizing: border-box;
            overflow-x: auto;
        }
        h1 {
            font-size: 24px;
        }
        button {
            font-size: 16px;
            margin: 10px;
            padding: 10px 20px;
        }
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            display: flex; 
            justify-content: center; /* 테이블을 가운데로 정렬 */
        }
        table {
            border-collapse: collapse;
            width: 100%;
            max-width: 800px; /* 테이블 크기 제한 */
            margin: 20px 0;
            border: 1px solid pink;
            border-width: 2px;
        }
        th, td {
            border: 1px solid pink;
            padding: 8px;
            text-align: center;
            font-size: 0.9em;
            border-width: 2px;
        }
        th {
            background-color: #f2f2f2;
        }
        @media (max-width: 600px) {
            th, td {
                font-size: 0.8em;
                padding: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>2학년 7반에 온것을 환영합니다 '익명의 여행자'님!</h1>
        <h1>2학년 7반의 시간표 입니다</h1>
        <div class="table-wrapper">
            <table>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">월요일</th>
                    <th scope="col">화요일</th>
                    <th scope="col">수요일</th>
                    <th scope="col">목요일</th>
                    <th scope="col">금요일</th>
                </tr>
                <tr>
                    <td>1교시</td>
                    <td>공강</td>
                    <td>영어II</td>
                    <td>A</td>
                    <td>D</td>
                    <td>진로</td>
                </tr>
                <tr>
                    <td>2교시</td>
                    <td>문학</td>
                    <td>A</td>
                    <td>영어II</td>
                    <td>미술</td>
                    <td>문학</td>
                </tr>
                <tr>
                    <td>3교시</td>
                    <td>영어II</td>
                    <td>체육</td>
                    <td>문학</td>
                    <td>미적분</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>4교시</td>
                    <td>C</td>
                    <td>한국사</td>
                    <td>D</td>
                    <td>A</td>
                    <td>체육</td>
                </tr>
                <tr>
                    <td>5교시</td>
                    <td>미적분</td>
                    <td>C</td>
                    <td>미적분</td>
                    <td>문학</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>6교시</td>
                    <td>D</td>
                    <td>B</td>
                    <td>창체</td>
                    <td>공강</td>
                    <td>공강</td>
                </tr>
                <tr>
                    <td>7교시</td>
                    <td>B</td>
                    <td>음악</td>
                    <td>창체</td>
                    <td>영어II</td>
                    <td>한국사</td>
                </tr>
            </table>
            </tbody></table>
        </div>
            
    </div>
</body>
</html>`);
	        break;
            case "8":
                var newWindow = window.open();
                newWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>2학년 8반 시간표</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: whitesmoke;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 800px;
            box-sizing: border-box;
            overflow-x: auto;
        }
        h1 {
            font-size: 24px;
        }
        button {
            font-size: 16px;
            margin: 10px;
            padding: 10px 20px;
        }
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            display: flex; /* 추가 */
            justify-content: center; /* 테이블을 가운데로 정렬 */
        }
        table {
            border-collapse: collapse;
            width: 100%;
            max-width: 800px; /* 테이블 크기 제한 */
            margin: 20px 0;
            border: 1px solid pink;
            border-width: 2px;
        }
        th, td {
            border: 1px solid pink;
            padding: 8px;
            text-align: center;
            font-size: 0.9em;
            border-width: 2px;
        }
        th {
            background-color: #f2f2f2;
        }
        @media (max-width: 600px) {
            th, td {
                font-size: 0.8em;
                padding: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>2학년 8반에 온것을 환영합니다 '익명의 여행자'님!</h1>
        <h1>2학년 8반의 시간표 입니다</h1>
        <div class="table-wrapper">
            <table>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">월요일</th>
                    <th scope="col">화요일</th>
                    <th scope="col">수요일</th>
                    <th scope="col">목요일</th>
                    <th scope="col">금요일</th>
                </tr>
                <tr>
                    <td>1교시</td>
                    <td>공강</td>
                    <td>문학</td>
                    <td>A</td>
                    <td>D</td>
                    <td>문학</td>
                </tr>
                <tr>
                    <td>2교시</td>
                    <td>음악</td>
                    <td>A</td>
                    <td>한국사</td>
                    <td>미적분</td>
                    <td>체육</td>
                </tr>
                <tr>
                    <td>3교시</td>
                    <td>영어II</td>
                    <td>미적분</td>
                    <td>문학</td>
                    <td>문학</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>4교시</td>
                    <td>C</td>
                    <td>진로</td>
                    <td>D</td>
                    <td>A</td>
                    <td>미적분</td>
                </tr>
                <tr>
                    <td>5교시</td>
                    <td>미술</td>
                    <td>C</td>
                    <td>체육</td>
                    <td>한국사</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>6교시</td>
                    <td>D</td>
                    <td>B</td>
                    <td>창체</td>
                    <td>공강</td>
                    <td>공강</td>
                </tr>
                <tr>
                    <td>7교시</td>
                    <td>B</td>
                    <td>영어II</td>
                    <td>창체</td>
                    <td>문학</td>
                    <td>영어II</td>
                </tr>
            </table>
            </tbody></table>
        </div>
            
    </div>
</body>
</html>`);
        	break;
            case "9":
                var newWindow = window.open();
                newWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
    <title>2학년 9반 시간표</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: whitesmoke;
        }
        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);
            width: 90%;
            max-width: 800px;
            box-sizing: border-box;
            overflow-x: auto;
        }
        h1 {
            font-size: 24px;
        }
        button {
            font-size: 16px;
            margin: 10px;
            padding: 10px 20px;
        }
        .table-wrapper {
            width: 100%;
            overflow-x: auto;
            display: flex; /* 추가 */
            justify-content: center; /* 테이블을 가운데로 정렬 */
        }
        table {
            border-collapse: collapse;
            width: 100%;
            max-width: 800px; /* 테이블 크기 제한 */
            margin: 20px 0;
            border: 1px solid pink;
            border-width: 2px;
        }
        th, td {
            border: 1px solid pink;
            padding: 8px;
            text-align: center;
            font-size: 0.9em;
            border-width: 2px;
        }
        th {
            background-color: #f2f2f2;
        }
        @media (max-width: 600px) {
            th, td {
                font-size: 0.8em;
                padding: 6px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>2학년 9반에 온것을 환영합니다 '익명의 여행자'님!</h1>
        <h1>2학년 9반의 시간표 입니다</h1>
        <div class="table-wrapper">
            <table>
                <tr>
                    <th scope="col"></th>
                    <th scope="col">월요일</th>
                    <th scope="col">화요일</th>
                    <th scope="col">수요일</th>
                    <th scope="col">목요일</th>
                    <th scope="col">금요일</th>
                </tr>
                <tr>
                    <td>1교시</td>
                    <td>공강</td>
                    <td>한국사</td>
                    <td>A</td>
                    <td>D</td>
                    <td>영어II</td>
                </tr>
                <tr>
                    <td>2교시</td>
                    <td>문학</td>
                    <td>A</td>
                    <td>영어II</td>
                    <td>문학</td>
                    <td>문학</td>
                </tr>
                <tr>
                    <td>3교시</td>
                    <td>미적분</td>
                    <td>음악</td>
                    <td>체육</td>
                    <td>진로</td>
                    <td>B</td>
                </tr>
                <tr>
                    <td>4교시</td>
                    <td>C</td>
                    <td>영어II</td>
                    <td>D</td>
                    <td>A</td>
                    <td>한국사</td>
                </tr>
                <tr>
                    <td>5교시</td>
                    <td>체육</td>
                    <td>C</td>
                    <td>문학</td>
                    <td>영어II</td>
                    <td>C</td>
                </tr>
                <tr>
                    <td>6교시</td>
                    <td>D</td>
                    <td>B</td>
                    <td>창체</td>
                    <td>공강</td>
                    <td>공강</td>
                </tr>
                <tr>
                    <td>7교시</td>
                    <td>B</td>
                    <td>미적분</td>
                    <td>창체</td>
                    <td>미술</td>
                    <td>미적분</td>
                </tr>
            </table>
            </tbody></table>
        </div>
            
    </div>
</body>
</html>`);

                newWindow.document.close();
                return;
                break;
            case "3":
                url = "https://class2-3.netlify.app";
                break;
            case "4":
                url = "https://class2-4.netlify.app";
                break;
            case "5":
                url = "https://class2-5.netlify.app";
                break;
            case "6":
                url = "https://class2-6.netlify.app";
                break;
            case "7":
                url = "https://class2-7.netlify.app";
                break;
            case "8":
                url = "https://class2-8.netlify.app";
                break;
            case "9":
                url = "https://class2-9.netlify.app";
                break;
            default:
                url = "https://example.com/default";
        }
    } else {
        url = "https://example.com/default";
    }

    window.location.href = url;
}
