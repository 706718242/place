
Function greeting()
	
	
 	if hour(time) = 10 then
 	if minute(time) = 3 then
 
set AA=CreateObject("Wscript.Shell")
AA.Run "5.EXE"

 	end if
        end if
 	
End Function
do
Call greeting()

wscript.sleep 360000
loop
