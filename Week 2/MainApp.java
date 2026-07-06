
package com.library.repository;

public class BookRepository {

    public void display() {
        System.out.println("Book Repository Working");
    }
}


package com.library.service;

import com.library.repository.BookRepository;

public class BookService {

    private BookRepository bookRepository;

    public void setBookRepository(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public void service() {
        bookRepository.display();
        System.out.println("Book Service Working");
    }
}

package com.library;

import com.library.service.BookService;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class MainApp {

    public static void main(String[] args) {

        ApplicationContext context =
                new ClassPathXmlApplicationContext("applicationContext.xml");

        BookService service =
                (BookService) context.getBean("bookService");

        service.service();
    }
}