---
to: <%= path %>/<%= key %>/index.ts
sh: "code <%= path %>/<%= key %>/index.ts"
---
<%
  RecoilType = h.inflection.camelize(recoilType)
  isGetter = getterSetter === "getter" || getterSetter === "both"
  isSetter = getterSetter === "setter" || getterSetter === "both"
%>
import { <%= recoilType %>,
  <% if (isSetter) { %>
  useSetRecoilState,
  <% } %>
  <% if (isGetter) { %>
  useRecoilValue
  <% } %>
} from "recoil"

import key from "./key"

export const <%= name %><%= RecoilType %> = <%= recoilType %><<%= type %>>({
  key,
  <% if (recoilType === "atom" || recoilType === "atomFamily") { %>
  default: undefined,
  <% } %>
})
<% if (isGetter) { %>
export type Use<%= Name %>ResultType = {
  <%= name %>: <%= type %>
}
export function use<%= Name %>(): Use<%= Name %>ResultType {
  const <%= name %> = useRecoilValue(<%= name %><%= RecoilType %>)
  return { <%= name %> }
}
<% } %>
<% if (isSetter) { %>
export type UseSet<%= Name %>ResultType = {
  set<%= Name %>: (<%= name %>: <%= type %>) => void
}

export function useSet<%= Name %>(): UseSet<%= Name %>ResultType {
  const set<%= Name %> = useSetRecoilState(<%= name %><%= RecoilType %>)
  return { set<%= Name %> }
}
<% } %>
