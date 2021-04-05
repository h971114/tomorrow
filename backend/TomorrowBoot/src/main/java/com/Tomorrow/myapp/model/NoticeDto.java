package  com.Tomorrow.myapp.model;

import lombok.*;
import org.springframework.web.multipart.MultipartFile;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class NoticeDto {
	private int ROWNUM;
	private int no;
	private String title;
	private String detail;
	private String date;
	private String writer;
	private int hit;
	private String file1;
	private String file2;
	private String file3;
}
