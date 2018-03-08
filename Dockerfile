FROM microsoft/aspnetcore:2.0 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.0 AS build
WORKDIR /src
# Copy csproj and restore as distinct layers
COPY . ./
RUN dotnet restore

RUN dotnet build -c Release -o /app

FROM build AS publish
RUN dotnet publish -c Release -o /pub


FROM base AS final
WORKDIR /app
COPY --from=publish /pub .
ENTRYPOINT ["dotnet", "assessmetl.dll"]
