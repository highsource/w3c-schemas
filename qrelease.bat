setlocal
echo Setting JAVA_HOME to %JAVA6_HOME%.
set JAVA_HOME=%JAVA6_HOME%

echo Performing a clean build.
rem pause
call mvn clean install -DperformRelease
echo Clean build completed.
rem pause

echo Setting new version to %1.
rem pause
call mvn versions:set -DnewVersion=%1
echo Version was set to %1.
rem pause
call mvn versions:commit
echo Version %1 committed.
rem pause

echo Performing a clean build.
rem pause
call mvn clean install -DperformRelease
echo Clean build completed.
rem pause

echo Checking in version %1.
rem pause
git commit -a -m "Version %1"
echo Version %1 was checked in.
rem pause

echo Tagging version %1.
rem pause
git tag -a %1 -m "Version %1"
echo Version %1 was tagged.
rem pause

echo Pushing version %1.
rem pause
git push origin master
git push --tags origin master
echo Version %1 was pushed.
rem pause

echo Performing clean deploy.
rem pause
call mvn -DperformRelease -Psonatype-oss-release clean deploy
echo Clean deploy done.
rem pause

echo Setting new version to %2.
rem pause
call mvn versions:set -DnewVersion=%2
echo Version was set to %2.
rem pause
call mvn versions:commit
echo Version %2 was committed.
rem pause

echo Performing a clean build.
rem pause
call mvn clean install -DperformRelease
echo Clean build completed.
rem pause

echo Checking in version %2.
rem pause
git commit -a -m "Version %2"
echo Version %2 was checked in.
rem pause

echo Pushing version %2.
rem pause
git push origin master
git push --tags origin master
echo Version %2 was pushed.
rem pause

endlocal