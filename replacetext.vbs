Dim Message, Title, Default, MyValue
Message = "Enter a value between 1 and 3"    ' Set prompt.
Title = "Print bar"    ' Set title.
Default = "1"    ' Set default.


' Display dialog box at position 100, 100.
MyValue = InputBox(Message, Title, Default,900,800)


set fso = createobject("scripting.filesystemobject")   ' 读取文件 
set stream = fso.opentextfile("1.txt",1) 
content = stream.readall() 
call stream.close()   ' 替换字符串 
content = replace(content,"34","BBB")   
' 保存文件 
set stream = fso.opentextfile("1.txt",2)

call stream.write(content)
call stream.close()
