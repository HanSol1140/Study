package view.board;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import biz.board.BoardDAO;
import biz.board.BoardVO;


@WebServlet("/UpdateBoardProCtrl.do")
public class UpdateBoardProCtrl extends HttpServlet {
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGetPost(request, response);
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		doGetPost(request, response);
	}

	// Get Post 처리
	protected void doGetPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("utf-8");
		
		int num = Integer.parseInt(request.getParameter("num"));
		// DAO
		BoardDAO bdao = new BoardDAO();
		BoardVO vo = bdao.getOneUpdateBoard(num);
		
		request.setAttribute("list", vo);

		RequestDispatcher dis = request.getRequestDispatcher("updateBoard.jsp");
	    dis.forward(request, response);
	}

}
