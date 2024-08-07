package view.user;

import java.io.IOException;
import java.sql.Date;
import java.text.DateFormat;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import biz.user.UserDAO;
import biz.user.UserVO;


@WebServlet("/JoinUserCtrl")
public class JoinUserCtrl extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGetPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGetPost(request, response);
	}

	// Get Post 처리
	protected void doGetPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		
		// 폼 파라메터 값 받기
		String email = request.getParameter("email");
		String id = request.getParameter("id");
		String pw = request.getParameter("password");
		String pw2 = request.getParameter("password2");
		String name = request.getParameter("name");
		String tel = request.getParameter("tel");
		String bday = request.getParameter("bday");
		String address = request.getParameter("address");
		
		// 배열 값 받기
		String[] agree = request.getParameterValues("agree");
		String data = "";
		for(String check : agree) {
			data += check + "";
		}
		
		UserVO bean = new UserVO();
		
		bean.setEmail(email);
		bean.setId(id);
		bean.setPassword(pw);
		bean.setName(name);
		bean.setTel(tel);
		bean.setBday(bday);
		bean.setAddress(address);
		bean.setAgree(data);
		
		
		
		// 컨트롤러 분기
		if(pw.equals(pw2)) {
			
			UserDAO dao = new UserDAO();			
			dao.insertUser(bean);
			// 포워딩
			RequestDispatcher dis = request.getRequestDispatcher("index.jsp");
			dis.forward(request, response);
			
		}
		
		
		
	}

}
